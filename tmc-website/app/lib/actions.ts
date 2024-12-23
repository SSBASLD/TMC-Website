'use server';

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { connectToDatabase } from "@/app/modules/database";
import { Test, User } from "@/app/lib/definitions";
import bcrypt from 'bcrypt';
import { signOut } from "@/auth";
import { z } from 'zod';
import { emit } from "process";
import { redirect } from "next/navigation";

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
    const { client, db } = await connectToDatabase();

    const users = (await db).db("TMC-Comp-Data").collection("Users");
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

        return "Success";
    } catch (error) {
        console.log(error);
        return 'Something went wrong! Try again';
    }
}

export async function upsertAnswers(email: string, answer: string, test: Test) {
    try {
        const { client, db } = await connectToDatabase();
        const Answers = await db.collection('Answers');

        const existing = await Answers.findOne({ 'id': test._id, 'email': email });

        if (!existing) {
            let stringArray = [];
            for (let i = 0; i < test.problems.length; i++) {
                stringArray.push("No Answer");
            }

            await Answers.insertOne({
                'id': test._id,
                'answers': stringArray,
                'email': email,
            });
        }

        await Answers.updateOne({ 'id': test._id, 'email': email }, { "$set": { "answers.1.content": answer } });
    } catch (error) {
        console.error(error);
    }
}

export async function signOutAsync() {
    await signOut();
    return "Signing out";
}