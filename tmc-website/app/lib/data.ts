import { connectToDatabase } from "@/app/modules/database";

import { Test } from '@/app/lib/definitions'

export async function fetchTests() {
    try {
        console.log('Fetching tests...');

        const { client, db } = await connectToDatabase();

        const Tests = await db.collection('Tests');
        const tests = await Tests.find({}); //TODO: Could make it find every test that isn't expired

        return tests;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch tests');
    }
}