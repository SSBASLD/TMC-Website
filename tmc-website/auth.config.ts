import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/individual-login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            console.log(isLoggedIn);

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;