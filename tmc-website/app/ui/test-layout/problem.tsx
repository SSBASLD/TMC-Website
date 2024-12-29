'use client'

import { ProblemType, Test } from "@/app/lib/definitions";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useDebouncedCallback } from 'use-debounce';
import { upsertAnswers } from "@/app/lib/actions";
import { auth } from "@/auth";
import { useActionState, useState } from "react";

export default function Problem({ test, problemNumber, problem }: { test: Test, problemNumber: string, problem: ProblemType }) {
    const [state, formAction] = useActionState(upsertAnswers, undefined);
    const [answer, setAnswer] = useState('');

    return (
        <>
            <Box component='form' action={async (formData) => {
                await formAction(formData);
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
                    id='Answer'
                    label='Answer'
                    variant='outlined'
                    size='small'
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                />

                {/* This is a really stupid way to handle FormData being passed to the form but im too lazy to change it */}
                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="answer"
                    name="answer"
                    value={answer}
                >
                </input>

                <Box sx={{ height: '3vh' }}></Box>
            </Box>
        </>
    );
}