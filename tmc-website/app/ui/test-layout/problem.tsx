'use client'

import { ProblemType, Test } from "@/app/lib/definitions";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useDebouncedCallback } from 'use-debounce';
import { upsertAnswers } from "@/app/lib/actions";
import { auth } from "@/auth";
import { useActionState, useState } from "react";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";
import zIndex from "@mui/material/styles/zIndex";
import ProblemsButton from "@/app/ui/test-layout/problems-button";

let formerNumber = 0;

export default function Problem({ test, problemNumber, problem, userEmail, currentAnswer }: { test: Test, problemNumber: string, problem: ProblemType, userEmail: string, currentAnswer: string }) {
    const [state, formAction] = useActionState(upsertAnswers, undefined);
    const [answer, setAnswer] = useState(currentAnswer);

    //I feel like there's a better way to do this but I can't think of it and I'm tired of working on it
    if (formerNumber != Number(problemNumber)) {
        formerNumber = Number(problemNumber);
        setAnswer(currentAnswer);
    }

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    async function handleProblemChange(number: string, increment: number) {
        if (Number(number) + increment <= 0 || Number(number) + increment > test.problems.length) {
            return;
        }

        const params = new URLSearchParams(searchParams);
        if (number) {
            params.set('problemNumber', (Number(number) + increment).toString());
        } else {
            params.delete('problemNumber');
        }
        replace(`${pathname}?${params.toString()}`);
    }

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
                    defaultValue={currentAnswer}
                />

                {/* This is a really stupid way to handle FormData being passed to the form but im too lazy to change it */}
                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="answer"
                    name="answer"
                    value={answer}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="numProblems"
                    name="numProblems"
                    defaultValue={test.problems.length}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="testID"
                    name="testID"
                    defaultValue={test._id}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="email"
                    name="email"
                    defaultValue={userEmail}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="currentProblem"
                    name="currentProblem"
                    defaultValue={problemNumber}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="submitted"
                    name="submitted"
                    defaultValue={(test.problems.length == Number(problemNumber)).toString()}
                />

                <Box sx={{ width: '100%', height: '8vh', left: '0%', bottom: '0vh', position: "absolute", display: 'flex', alignItems: 'center', justifyContent: 'center', paddingX: { 'MobileL': '20px', 'MobileS': '5px' }, gap: '15px' }}>
                    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: { 'MobileL': '20px', 'MobileS': '5px' }, paddingBottom: 0.5, zIndex: 1600 }}>
                        <Button
                            onClick={() => {
                                handleProblemChange(problemNumber.toString(), -1);
                            }}
                            variant='contained'
                            sx={{ backgroundColor: 'primary.light', borderRadius: '30px', fontSize: { MobileL: '15px', MobileS: '10px' } }}
                            type='submit'
                        >
                            Back
                        </Button>
                        <Button
                            onClick={() => {
                                handleProblemChange(problemNumber.toString(), 1);
                            }}
                            variant='contained'
                            sx={{ backgroundColor: 'primary.light', borderRadius: '30px', fontSize: { MobileL: '15px', MobileS: '10px' } }}
                            type='submit'
                        >
                            {test.problems.length == Number(problemNumber) ? "Submit" : "Next"}
                        </Button>
                    </Box>

                    <Box sx={{ width: '100%', height: '7vh', display: 'flex', justifyContent: { 'MobileS': 'left', 'Tablet': 'center' }, alignItems: 'center', position: 'absolute', padding: 1 }}>
                        <ProblemsButton problemNumber={problemNumber} amount={test.problems.length} />
                    </Box>
                </Box>
            </Box >
        </>
    );
}