import next from 'next';
import type { NextAuthConfig } from 'next-auth';

var wasLoggedIn = false;

export const authConfig = {
    pages: {
        signIn: '/individual-login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnCompPages = nextUrl.pathname.startsWith('/competition');

            //TODO: make it so that you can click on team login and individual login to log out
            if (!wasLoggedIn && isLoggedIn && (nextUrl.pathname.includes('login') || nextUrl.pathname.includes('sign-up'))) {
                wasLoggedIn = isLoggedIn;
                return Response.redirect(new URL('/competition', nextUrl));
            }

            wasLoggedIn = isLoggedIn;
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;