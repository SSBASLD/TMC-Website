import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Problem({ problemNumber }: { problemNumber: string }) {
    return (
        <>
            <Box sx={{ height: '5vh', width: '80vw', maxWidth: '700px', backgroundColor: 'lightgray' }} className={`border-b-[0.5vh] border-black`}>
                <Box sx={{ height: '5vh', width: 'auto', aspectRatio: 1, backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '2.5vh', color: 'white' }}>{problemNumber}</Typography>
                </Box>

                <Box sx={{ height: '3vh' }}></Box>

                <Box>
                    <Typography>
                        On a 4x4 grid, a “loop” is a closed path where each square is connected to
                        exactly two adjacent squares, forming a continuous, non-branching, and
                        self-contained circuit. The loop must stay within the grid and not cross
                        itself. William Zhong must place one or more non-overlapping loops on the
                        grid so that every square is part of exactly one loop. How many distinct
                        ways can this be done, considering rotations and reflections as different
                        configurations?
                    </Typography>
                </Box>

                <Box sx={{ height: '3vh' }}></Box>

                <Box component='img' src='/test.png' sx={{ display: 'flex', justifySelf: 'center' }}></Box>

                <Box sx={{ height: '3vh' }}></Box>

                <TextField
                    id='outlined-basic'
                    label='Answer'
                    variant='outlined'
                    size='small'
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                />
            </Box>
        </>
    );
}