import next from 'next';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/individual-login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnCompPages = nextUrl.pathname.startsWith('/competition');

            //TODO: make it so that you can click on team login and individual login to log out
            if (isLoggedIn && (nextUrl.pathname.includes('login') || nextUrl.pathname.includes('sign-up'))) {
                return Response.redirect(new URL('/competition', nextUrl));
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;