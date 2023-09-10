import { User } from '@/entity/user';

declare module 'next-auth' {
  interface Session {
    user: User

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}


declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      email: string;
      name: string;
      adress: string;
    };

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
