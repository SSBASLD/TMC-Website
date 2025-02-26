import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/auth.config';
import { z } from 'zod';
import { User } from '@/app/lib/definitions';
import { connectToDatabase } from '@/app/modules/database';
import bcrypt from 'bcrypt';
import { parse } from 'path';


async function getUser(user_id: string): Promise<User | null> {
  try {
    const { client, db } = await connectToDatabase();

    const Users = await db.collection("Users");
    const user = Users.findOne({ user_id: user_id });

    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ user_id: z.string().min(6), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { user_id, password } = parsedCredentials.data;
          const user = await getUser(user_id);

          if (!user) return null;

          const passwordsMatch = password == user.password;
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});