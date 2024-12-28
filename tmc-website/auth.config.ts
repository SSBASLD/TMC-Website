import next from 'next';
import type { NextAuthConfig } from 'next-auth';

var wasLoggedIn = false;

export const authConfig = {
    pages: {
        signIn: '/individual-login',
    },
    callbacks: {
        session: ({ session, token }) => {
            console.log("Session Callback", { session, token });
            return session;
        },
        jwt: ({ token, user }) => {
            return token;
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            console.log(auth);

            const isOnCompPages = nextUrl.pathname.startsWith('/competition');

            if (isOnCompPages && !isLoggedIn) {
                return Response.redirect(new URL('/dashboard/login', nextUrl));
            }

            // TODO: make it so that you can click on team login and individual login to log out
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