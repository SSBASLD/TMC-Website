'use client'

import Link from "next/link";
import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { Test } from "@/app/lib/definitions";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme.config";

const TestCard = ({ id, name, timeLimit, startDate, endDate, team }: { id: string, name: string, timeLimit: number, startDate: string, endDate: string, team: boolean }) => {
    return (
        <Grid2 size={{ Tablet: 12 / 4, MobileM: 12 / 2, MobileS: 12 }}>
            <Card sx={{ border: 'solid', borderColor: 'black', maxWidth: '300px' }}>
                <CardContent>
                    <Link key={id} href={team ? `/test/team/team-pending` : `/test/individual?problemNumber=1&testID=${id}`} className={`text-[20px] font-bold hover:text-blue-300`}>{name}</Link>
                    <Typography sx={{ fontSize: '20px' }}>Time Limit: {timeLimit.toString()} minutes</Typography>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Available between {startDate} and {endDate}</Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}

export default function TestCards({ tests, team }: { tests: Test[], team: boolean }) {
    let cards = [];
    for (let i = 0; i < tests.length; i++) {
        cards.push(
            <TestCard
                id={tests[i]._id}
                name={tests[i].testName}
                timeLimit={tests[i].timeLimit}
                startDate={tests[i].startDate}
                endDate={tests[i].endDate}
                key={tests[i]._id}
                team={team}
            />
        );
    }

    return (
        <ThemeProvider theme={theme}>
            {cards}
        </ThemeProvider>
    );
}