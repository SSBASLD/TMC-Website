import next from 'next';
import type { NextAuthConfig } from 'next-auth';
import { fetchAnswers, fetchTestById } from '@/app/lib/data';
import { User } from '@/app/lib/definitions';
import { connectToDatabase } from '@/app/modules/database';

var wasLoggedIn = false;

export const authConfig = {
    pages: {
        signIn: '/dashboard/login',
    },
    callbacks: {
        session: ({ session, token }) => {
            session.userId = token.userID;

            return session;
        },
        jwt: ({ token, user }) => {
            if (user) {
                token.userID = user.user_id;
            }

            return token;
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isOnCompPages = nextUrl.pathname.includes('competition');

            if (isOnCompPages && !isLoggedIn) {
                return Response.redirect(new URL('/dashboard/login', nextUrl));
            }

            // TODO: make it so that you can click on team login and individual login to log out
            if (!wasLoggedIn && isLoggedIn && (nextUrl.pathname.includes('login') || nextUrl.pathname.includes('sign-up'))) {
                wasLoggedIn = isLoggedIn;
                return Response.redirect(new URL('/competition/individual', nextUrl));
            }

            wasLoggedIn = isLoggedIn;
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;