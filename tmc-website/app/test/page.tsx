'use client'

import { Box, CssBaseline, Typography, TextField, Grid2 } from "@mui/material";
import ProblemsButton from "@/app/ui/test-layout/problems-button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";
import ChangeProblemButton from "@/app/ui/test-layout/change-problem-button";
import Problem from "@/app/ui/test-layout/problem"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useState } from "react";


export default function Page({ searchParams }: { searchParams?: { problemNumber?: string } }) {
    let [text, setText] = useState('');

    let problemNumber = searchParams?.problemNumber || '1';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: '8vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: 2 }} className={`border-b-[0.5vh] border-black`}>
                    <Typography sx={{ fontSize: '3vh', color: 'black' }}>[Test Name]</Typography>
                </Box>

                <Box sx={{ height: '84vh', display: 'flex', justifyContent: 'center', paddingY: 3, color: 'black' }}>
                    <Problem problemNumber={problemNumber} />
                </Box>

                <Box sx={{ height: '8vh', backgroundColor: 'primary.main', width: '100%' }} className={`border-t-[0.5vh] border-black`}>
                    <Box sx={{ width: '100%', height: '7vh', display: 'flex', justifyContent: { 'MobileS': 'left', 'Tablet': 'center' }, alignItems: 'center', position: 'absolute', padding: 1 }}>
                        <ProblemsButton problemNumber={problemNumber} />
                    </Box>

                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none', paddingX: { 'MobileL': '20px', 'MobileS': '5px' }, gap: '15px' }}>
                        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: { 'MobileL': '20px', 'MobileS': '5px' }, paddingBottom: 0.5 }}>
                            <ChangeProblemButton title="Back" increment={-1} currentNumber={problemNumber}></ChangeProblemButton>
                            <ChangeProblemButton title="Next" increment={1} currentNumber={problemNumber}></ChangeProblemButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider >
    );
}