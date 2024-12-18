'use server'

import { inter } from "@/app/ui/fonts";
import { Card, CardActions, Button, Box, ThemeProvider, CssBaseline, Tooltip, tooltipClasses, TooltipProps, Grid2, Typography } from "@mui/material";
import { blue, lightBlue, red, yellow } from "@mui/material/colors";
import { forwardRef, useState } from "react";
import { ClassNames } from "@emotion/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';
import { useSearchParams } from "next/navigation";
import ProblemsButton from "@/app/ui/test-layout/problems-button";


export default async function Page(props: {
    searchParams?: Promise<{
        problemNumber?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const problemNumber = searchParams?.problemNumber || '';

    return (
        <div>
            <CssBaseline></CssBaseline>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ backgroundColor: '#0e7490', height: '8vh', width: '100%' }} className={`border-b-[0.5vh] border-black`}></Box>

                <Box sx={{ height: '84vh' }}>
                </Box>

                <Box sx={{ height: '8vh', backgroundColor: '#0e7490', width: '100%' }} className={`border-t-[0.5vh] border-black`}>
                    <ProblemsButton problemNumber={problemNumber} />

                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', userSelect: 'none', paddingX: '5%', gap: '15px' }}>
                        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
                            <Button variant='contained' sx={{ backgroundColor: '#2db6d6', borderRadius: '30px' }}>Back</Button>
                            <Button variant='contained' sx={{ backgroundColor: '#2db6d6', borderRadius: '30px' }}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}