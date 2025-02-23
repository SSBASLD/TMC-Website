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

    const users = (await db).collection("Users");
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

export async function createTeam(prevState: string | undefined, formData: FormData) {
    const { client, db } = await connectToDatabase();

    const Teams = (await db).collection('Teams');
    let repeat = await Teams.findOne({ email: formData.get('email') });

    if (repeat != null) {
        return 'A team with that email already exists!';
    }

    const emailParse = z.string().email().safeParse(formData.get('email'));
    if (!emailParse.success) {
        return 'You must enter a valid email address!';
    }

    if (formData.get('name') == null) {
        return 'You must enter some sort of team name!'
    }

    try {
        await Teams.insertOne({
            name: formData.get('name'),
            email: formData.get('email'),
        });

        return "Success";
    } catch (error) {
        console.log(error);
        return 'Something went wrong! Try again';
    }
}

// export async function upsertAnswers(prevState: string | undefined, formData: FormData) {
//     try {
//         const answers = JSON.parse(formData.get("answers")?.toString() || "{}");
//         const test = JSON.parse(formData.get("test")?.toString() || "{}");
//         const userEmail = formData.get("userEmail");

//         const { client, db } = await connectToDatabase();
//         const Answers = await db.collection('Answers');

//         await Answers.updateOne(
//             { 'testID': test._id, 'userEmail': userEmail },
//             {
//                 $set: {
//                     testID: test._id,
//                     answers: answers,
//                     userEmail: userEmail,
//                     finished: true
//                 }
//             },
//             { upsert: true }
//         );
//         return 'Success';
//     } catch (error) {
//         console.error(error);
//         return 'An error has occured';
//     }
// }

export async function upsertAnswers(answers: Array<string>, userEmail: string, test: Test) {
    try {
        const { client, db } = await connectToDatabase();
        const Answers = await db.collection('Answers');

        await Answers.updateOne(
            { 'testID': test._id, 'userEmail': userEmail },
            {
                $set: {
                    testID: test._id,
                    answers: answers,
                    userEmail: userEmail,
                    finished: true
                }
            },
            { upsert: true }
        );
        return 'Success';
    } catch (error) {
        console.error(error);
        return 'An error has occured';
    }
}


export async function signOutAsync() {
    await signOut();
    return "Signing out";
}