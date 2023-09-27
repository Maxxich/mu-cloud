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
        cache: 'no-cache'
    });
  
    const response = await res.json();
  
    return {
        ...token,
        backendTokens: response.backendTokens,
        user: response.user,
    };
}

async function logOut(token: JWT): Promise<void> {
    await fetch(backendUrl + '/auth-private/logout', {
        headers: {
            authorization: `Bearer ${token.backendTokens.accessToken}`,
        },
    });
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
        async jwt({ token, user, trigger }) {

            if (trigger === 'update') {
                return await refreshToken(token);
            }
  
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
        signIn: '/signin',
        newUser: '/signup'
    },

    events: {
        async signOut({ token }) {
            await logOut(token)
        },
    }
};