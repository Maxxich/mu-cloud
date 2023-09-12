import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { backendUrl } from '@/shared/const/backendUrl';

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(backendUrl + '/auth/refresh', {
        method: 'POST',
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`,
        },
    });
  
    const response = await res.json();
  
    return {
        ...token,
        backendTokens: response,
    };
}
  
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;
                const { email, password } = credentials;
                const res = await fetch(backendUrl + '/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (res.status !== 201) {
                
                    return null;
                }
                const user = await res.json();
          
                return user;
            },
        }),
    ],
  
    callbacks: {
        async jwt({ token, user }) {
  
            if (user) return { ...token, ...user };
  
            if (new Date().getTime() < token.backendTokens.expiresIn)
                return token;
  
            return await refreshToken(token);
        },
  
        async session({ token, session }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;
            return session;
        },
    },

    pages: {
        signIn: '/signin'
    }
};