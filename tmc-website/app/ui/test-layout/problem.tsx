import { ProblemType } from "@/app/lib/definitions";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Problem({ testID, problemNumber, problem }: { testID: string, problemNumber: string, problem: ProblemType }) {
    return (
        <>
            <Box sx={{ height: '5vh', width: '80vw', maxWidth: '700px', backgroundColor: 'lightgray' }} className={`border-b-[0.5vh] border-black`}>
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

                {problem.picture ? <Box component='img' src={problem.picture ? `/${testID}/${problemNumber}.png` : ''} sx={{ display: 'flex', justifySelf: 'center' }} /> : ''}

                <Box sx={{ height: '3vh' }}></Box>

                <TextField
                    id='outlined-basic'
                    label='Answer'
                    variant='outlined'
                    size='small'
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                />

                <Box sx={{ height: '3vh' }}></Box>
            </Box>
        </>
    );
}