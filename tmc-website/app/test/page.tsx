'use server'

import { Box, CssBaseline, Typography, TextField, Grid2 } from "@mui/material";
import ProblemsButton from "@/app/ui/test-layout/problems-button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";
import ChangeProblemButton from "@/app/ui/test-layout/change-problem-button";
import Problem from "@/app/ui/test-layout/problem"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { fetchAnswers, fetchTestById } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function Page({ searchParams }: { searchParams?: { problemNumber?: string, testID?: string } }) {
    const session = await auth();
    const user = session?.user;

    const email = user?.email ? user?.email : '';

    let resolvedSearchParams = await searchParams;

    let testID = resolvedSearchParams?.testID || '';
    let problemNumber = resolvedSearchParams?.problemNumber || '1';

    const test = await fetchTestById(testID);
    if (test) {
        test._id = test._id.toString();
    }

    const answers = await fetchAnswers(testID, email);
    const answer = answers.answers[Number(problemNumber) - 1];

    const currentProblem = test.problems[Number(problemNumber) - 1];

    return (
        <>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: '8vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: 2 }} className={`border-b-[0.5vh] border-black`}>
                    <Typography sx={{ fontSize: '3vh', color: 'black' }}>{test.testName}</Typography>
                </Box>

                <Box sx={{ height: '84vh', display: 'flex', justifyContent: 'center', paddingY: 3, color: 'black', overflowY: 'scroll' }}>
                    <Problem test={test} problemNumber={problemNumber} problem={currentProblem} userEmail={email} currentAnswer={answer} />
                </Box>

                <Box sx={{ height: '8vh', backgroundColor: 'primary.main', width: '100%' }} className={`border-t-[0.5vh] border-black`}>
                </Box>
            </Box>
        </>
    );
}