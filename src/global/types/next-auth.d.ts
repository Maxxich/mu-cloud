import { User } from '@/entity/user';

declare module 'next-auth' {
  interface Session {
    user: User | undefined

    backendTokens: {
      accessToken: string;
      refreshToken: string;
    } | undefined
    expiresIn: number;
    error?: string 
  }
}


declare module 'next-auth/jwt' {
  interface JWT {
    user: User

    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
    expiresIn: number;
  }
}
