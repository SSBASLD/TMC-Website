'use server';

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { client } from "@/app/modules/database";
import { User } from "@/app/lib/definitions";
import bcrypt from 'bcrypt';
import { signOut } from "@/auth";
import { z } from 'zod';
import { emit } from "process";
import { redirect } from "next/navigation";

const database = client.connect();

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);

        return 'Successfully signed in!';
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function createUser(prevState: string | undefined, formData: FormData) {
    const users = (await database).db("TMC-Comp-Data").collection("Users");
    let repeat = await users.findOne({ email: formData.get('email') });
    if (repeat != null) {
        return 'A user with that email already exists!';
    }

    const emailParse = z.string().email().safeParse(formData.get('email'));
    const passwordParse = z.string().min(6).safeParse(formData.get('password'));

    if (!emailParse.success) {
        return 'You must enter a valid email address!';
    }

    if (!passwordParse) {
        return 'You must enter a password that is more than 6 characters long!';
    }

    var password = formData.get('password') as string;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await users.insertOne({
            name: formData.get('username'),
            email: formData.get('email'),
            password: hashedPassword
        });
        return 'Successfully created account!'
    } catch (error) {
        return 'Something went wrong! Try again';
    }
}

export async function signOutAsync() {
    await signOut();
}