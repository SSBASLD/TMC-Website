import { lusitana } from "@/app/ui/fonts";
import { signOutAsync } from "../lib/actions";
import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { theme } from "@/theme.config";
import { ThemeProvider } from "@emotion/react";
import { fetchAnswers, fetchTests } from "@/app/lib/data";
import TestCards from "@/app/ui/default-layout/test-cards";
import { Test } from "@/app/lib/definitions"
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();
    const email = session?.user?.email ? session?.user?.email : '';

    let tests = await fetchTests();
    tests = tests.map((e: Test) => {
        return {
            _id: e._id.toString(),
            problems: e.problems,
            testName: e.testName,
            timeLimit: e.timeLimit,
            endDate: e.endDate,
            startDate: e.startDate,
        };
    });

    let answers = [];
    for (let i = 0; i < tests.length; i++) {
        let test = tests[i];
        answers.push(await fetchAnswers(test._id, email));
    }

    tests = tests.filter((test: Test, index: number) => {
        return answers[index].finished != 'true';
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

                {tests.length == 0 ? <Typography sx={{ color: 'black', fontSize: '30px' }}>No competitions are available right now</Typography> : ''}
            </Grid2>
        </main>
    );
}
