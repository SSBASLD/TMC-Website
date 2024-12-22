'use client'

import { lusitana } from "@/app/ui/fonts";
import { signOutAsync } from "../lib/actions";
import { useEffect, useRef } from "react";
import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { theme } from "@/theme.config";
import { ThemeProvider } from "@emotion/react";
import { fetchTests } from "@/app/lib/data";

const TestCard = () => {
    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(
            <ThemeProvider theme={theme}>
                <Grid2 size={{ Tablet: 12 / 4, MobileM: 12 / 2, MobileS: 12 }} key={i}>
                    <Card sx={{ border: 'solid', borderColor: 'black', maxWidth: '300px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Individual Competition</Typography>
                            <Typography sx={{ fontSize: '20px' }}>Time Limit: 40 minutes</Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Available between 3/14 and 3/21</Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </ThemeProvider>
        );
    }

    return (
        <>{cards}</>
    );
}

export default async function Home() {
    const tests = await fetchTests();

    return (
        <main className={`p-[2%] w-[100%] h-[100%] overflow-scroll`}>
            <p className={`top-[8%] left-[10%] right-[10%] flex items-center justify-left ${lusitana.className} text-black
                Laptop:text-[50px] 
                Tablet:text-[40px] 
                Mobile-S:text-[30px]`}
            >
                Individual Competitions
            </p>

            <Grid2 container spacing={2}>
                <TestCard></TestCard>
            </Grid2>
        </main>
    );
}
