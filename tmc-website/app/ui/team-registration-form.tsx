'use client'

import { theme } from "@/theme.config";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createTeam } from "../lib/actions";
import { redirect } from "next/navigation";

export default function TeamRegistrationForm() {
    const [state, formAction] = useFormState(createTeam, undefined);

    if (state == "Success") {
        redirect('/dashboard/join-team');
    }

    return (
        <ThemeProvider theme={theme}>
            <form action={async (formData) => {
                await formAction(formData);
            }} className="h-[100%]">
                <Stack sx={{ height: '100%', width: '100%', boxShadow: 2, padding: '3%', alignItems: 'center' }} className={`rounded-md bg-auto bg-slate-100 text-black-500`} spacing={2}>
                    <Typography sx={{ fontSize: '40px', color: 'black' }}>Team Registration</Typography>

                    <input
                        className={`w-[50%] text-black min-w-[200px] h-[10%] rounded-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="email"
                        name="email"
                        placeholder="Team Email"
                        required
                    >
                    </input>

                    <input
                        className={`w-[50%] text-black min-w-[200px] h-[10%] rounded-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="name"
                        name="name"
                        placeholder="Team Name"
                        required
                    >
                    </input>

                    <div className={`h-[10%] text-[15px] text-red-500`}>{state}</div>

                    <Box sx={{ height: '3vh' }}></Box>

                    <Typography sx={{ color: 'black', fontSize: '20px' }}>Want to join a team instead? <Link key="Join Team" href={`/dashboard/join-team`} className={`text-blue-400`}>    Join here!</Link>
                    </Typography>

                    <Box sx={{ height: '1.5vh' }}></Box>

                    <Button variant='contained' type='submit' sx={{ height: '50px', fontSize: '18px' }}>Register Team</Button>
                </Stack>
            </form>
        </ThemeProvider>
    );
}   