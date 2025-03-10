'use server'

import { Box, CssBaseline, Typography, TextField, Grid2, Button } from "@mui/material";
import ProblemsButton from "@/app/ui/test-layout/problems-button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";
import ChangeProblemButton from "@/app/ui/test-layout/change-problem-button";
import Problem from "@/app/ui/test-layout/problem"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { fetchAnswers, fetchTestById, fetchUserById } from "@/app/lib/data";
import { auth } from "@/auth";
import Timer from "@/app/ui/test-layout/timer";
import { redirect } from 'next/navigation'
import TeamPending from "@/app/ui/test-layout/team/team-pending";

export default async function Page({ searchParams }: { searchParams?: Promise<{ problemNumber?: string, testID?: string }> }) {
    const session = await auth();
    const userId = session?.userId ? session.userId : '';

    let resolvedSearchParams = await searchParams;

    let testID = resolvedSearchParams?.testID || '';
    let problemNumber = resolvedSearchParams?.problemNumber || '1';

    const test = await fetchTestById(testID);
    if (test) {
        test._id = test._id.toString();
    }

    const answers = await fetchAnswers(testID, userId);
    const answer = answers ? answers.answers[Number(problemNumber) - 1] : '';

    const currentProblem = test.problems[Number(problemNumber) - 1];

    if (answers && answers.finished) {
        redirect("/competition/team");
    }

    return (
        <>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: '8vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: 2 }} className={`border-b-[0.5vh] border-black`}>
                    <Typography sx={{ fontSize: '3vh', color: 'black' }}>{test.testName}</Typography>
                    <Timer testID={test._id} userId={userId} test={test} />
                </Box>

                <Box sx={{ height: '84vh', display: 'flex', justifyContent: 'center', paddingY: 3, color: 'black', overflowY: 'scroll' }}>
                    <Problem test={test} problemNumber={problemNumber} problem={currentProblem} userId={userId} currentAnswer={answer} />
                </Box>

                <Box sx={{ height: '8vh', backgroundColor: 'primary.main', width: '100%' }} className={`border-t-[0.5vh] border-black`}>
                </Box>
            </Box>
        </>
    );
}