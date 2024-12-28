'use client'

import { ProblemType, Test } from "@/app/lib/definitions";
import { Box, TextField, Typography } from "@mui/material";
import { useDebouncedCallback } from 'use-debounce';
import { upsertAnswers } from "@/app/lib/actions";
import { auth } from "@/auth";
import { useFormState } from "react-dom";

export default async function Problem({ test, problemNumber, problem }: { test: Test, problemNumber: string, problem: ProblemType }) {
    return (
        <>
            <Box component='form' action={async (formData) => {

            }} sx={{ height: '5vh', width: '80vw', maxWidth: '700px', backgroundColor: 'lightgray' }} className={`border-b-[0.5vh] border-black`}>
                <Box sx={{ height: '5vh', width: 'auto', aspectRatio: 1, backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '2.5vh', color: 'white' }}>{problemNumber}</Typography>
                </Box>

                <Box sx={{ height: '3vh' }}></Box>

                <Box>
                    <Typography>
                        {problem.problem}
                    </Typography>
                </Box>

                <Box sx={{ height: '3vh' }}></Box>

                {problem.picture ? <Box component='img' src={problem.picture ? `/${test._id}/${problemNumber}.png` : ''} sx={{ display: 'flex', justifySelf: 'center' }} /> : ''}

                <Box sx={{ height: '3vh' }}></Box>

                <TextField
                    id='outlined-basic'
                    label='Answer'
                    variant='outlined'
                    size='small'
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                />

                <Box sx={{ height: '3vh' }}></Box>
            </Box>
        </>
    );
}