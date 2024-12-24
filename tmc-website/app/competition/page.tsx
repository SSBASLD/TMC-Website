import { lusitana } from "@/app/ui/fonts";
import { signOutAsync } from "../lib/actions";
import { useEffect, useRef } from "react";
import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { theme } from "@/theme.config";
import { ThemeProvider } from "@emotion/react";
import { fetchTests } from "@/app/lib/data";
import TestCards from "@/app/ui/default-layout/test-cards";
import { Test } from "@/app/lib/definitions"

export default async function Home() {
    let tests = await fetchTests();
    tests = tests.map((e: Test) => {
        return {
            _id: e._id.toString(),
            problems: e.problems,
            testName: e.testName,
            timeLimit: e.testName,
            endDate: e.endDate,
            startDate: e.startDate,
        };
    });

    const testCards = (<TestCards tests={tests}></TestCards>);

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
                {testCards}
            </Grid2>
        </main>
    );
}
