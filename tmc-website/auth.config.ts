import type {NextAuthConfig} from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/individual-login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;