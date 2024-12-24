'use server'

import { Box, CssBaseline, Typography, TextField, Grid2 } from "@mui/material";
import ProblemsButton from "@/app/ui/test-layout/problems-button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";
import ChangeProblemButton from "@/app/ui/test-layout/change-problem-button";
import Problem from "@/app/ui/test-layout/problem"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { fetchTestById } from "@/app/lib/data";


export default async function Page({ searchParams }: { searchParams?: { problemNumber?: string, testID?: string } }) {
    let testID = searchParams?.testID || '';
    let problemNumber = searchParams?.problemNumber || '1';

    const test = await fetchTestById(testID);
    const currentProblem = test.problems[Number(problemNumber) - 1];

    return (
        <>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: '8vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: 2 }} className={`border-b-[0.5vh] border-black`}>
                    <Typography sx={{ fontSize: '3vh', color: 'black' }}>{test.testName}</Typography>
                </Box>

                <Box sx={{ height: '84vh', display: 'flex', justifyContent: 'center', paddingY: 3, color: 'black', overflowY: 'scroll' }}>
                    <Problem test={test} problemNumber={problemNumber} problem={currentProblem} />
                </Box>

                <Box sx={{ height: '8vh', backgroundColor: 'primary.main', width: '100%' }} className={`border-t-[0.5vh] border-black`}>
                    <Box sx={{ width: '100%', height: '7vh', display: 'flex', justifyContent: { 'MobileS': 'left', 'Tablet': 'center' }, alignItems: 'center', position: 'absolute', padding: 1 }}>
                        <ProblemsButton problemNumber={problemNumber} amount={test.problems.length} />
                    </Box>

                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none', paddingX: { 'MobileL': '20px', 'MobileS': '5px' }, gap: '15px' }}>
                        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: { 'MobileL': '20px', 'MobileS': '5px' }, paddingBottom: 0.5 }}>
                            <ChangeProblemButton title="Back" increment={-1} currentNumber={problemNumber} numberOfProblems={test.problems.length} />
                            <ChangeProblemButton title={problemNumber == test.problems.length ? "Submit" : "Next"} increment={1} currentNumber={problemNumber} numberOfProblems={test.problems.length} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}