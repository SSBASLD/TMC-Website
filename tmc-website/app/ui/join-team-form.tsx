'use client'

import Image from "next/image";
import { inter } from "./fonts";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";
import Link from "next/link";

//Might not need this since 
export default function JoinTeamForm() {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: '100%', width: '100%', boxShadow: 2, padding: '3%', flexDirection: "column", display: "flex" }} className={`rounded-md bg-auto bg-slate-100`}>
                <Typography sx={{ fontSize: '40px', color: 'black' }}>Sign into a Team Account</Typography>

                <Box sx={{ height: '6vh' }} />

                <TextField
                    id='outlined-basic'
                    label='User ID'
                    name='User ID'
                    variant='outlined'
                    fullWidth
                    slotProps={{ htmlInput: { maxLength: 10 } }}
                    sx={{ bgcolor: 'white', width: '50%' }}
                />

                <Box sx={{ height: '5vh' }}></Box>

                <TextField
                    id='outlined-basic'
                    label='User ID'
                    name='User ID'
                    variant='outlined'
                    fullWidth
                    slotProps={{ htmlInput: { maxLength: 10 } }}
                    sx={{ bgcolor: 'white', width: '50%' }}
                />

                <br></br>

                <Box sx={{ height: '6vh' }} />

                <Grid2 container spacing={2} alignItems='center'>
                    <Grid2>
                        <Button variant="contained" sx={{ width: '100px', height: '40px', fontSize: '18px' }}>Join</Button>
                    </Grid2>
                    <Grid2>
                        {/* TODO: Need to change this to point to the google form where team registration will happen */}
                        <Link key="Register Team" href={`/dashboard/team-registration`} className={`text-blue-400`}>Register a team here!</Link>
                    </Grid2>
                </Grid2>
            </Box>
        </ThemeProvider>
    );
}