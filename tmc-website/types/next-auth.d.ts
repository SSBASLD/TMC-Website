import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

//This file is needed to augment the default User object in Auth.js to use UserID and not email

declare module "next-auth" {
    interface User {
        user_id: string,
        password: string
    }

    interface Session {
        userId: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string,
        iat: number,
        exp: number,
        jti: string,
        userID: string,
    }
}