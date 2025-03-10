'use server'

import { connectToDatabase } from "@/app/modules/database";

import { Test, User } from '@/app/lib/definitions'
import { ObjectId } from "mongodb";

//All the server actions needed to fetch data from the database

export async function fetchTests() {
    try {
        console.log('Fetching tests...');

        const { client, db } = await connectToDatabase();

        const Tests = await db.collection('Tests');
        const tests = await Tests.find({}).toArray(); //TODO: Could make it find every test that isn't expired

        return tests;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch tests');
    }
}

export async function fetchTestById(id: string) {
    try {
        const { client, db } = await connectToDatabase();

        const Tests = await db.collection('Tests');
        const test = await Tests.findOne({ "_id": new ObjectId(id) });

        return test;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch test with specified ID');
    }
}

export async function fetchAnswers(testID: string, userId: string) {
    try {
        const { client, db } = await connectToDatabase();

        const Answers = await db.collection('IndividualAnswers');
        const answers = await Answers.findOne({ "testID": testID, 'userId': userId });

        return answers;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch answer with specified ID');
    }
}

export async function fetchUserById(userId: string): Promise<User | null> {
    try {
        const { client, db } = await connectToDatabase();

        const Users = await db.collection('Users');
        const user = await Users.findOne({ 'user_id': userId });

        return user;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch user with specified ID");
    }
}