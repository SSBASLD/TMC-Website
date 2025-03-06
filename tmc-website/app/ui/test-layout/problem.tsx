'use client'

import { ProblemType, Test } from "@/app/lib/definitions";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useDebouncedCallback } from 'use-debounce';
import { upsertAnswers } from "@/app/lib/actions";
import { auth } from "@/auth";
import { useActionState, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";
import zIndex from "@mui/material/styles/zIndex";
import ProblemsButton from "@/app/ui/test-layout/problems-button";

let formerNumber = 0;

export default function Problem({ test, problemNumber, problem, userId, currentAnswer }: { test: Test, problemNumber: string, problem: ProblemType, userId: string, currentAnswer: string }) {
    const [answer, setAnswer] = useState(currentAnswer);

    useEffect(() => {
        if (typeof window !== undefined && window.localStorage) {
            let answers = window.localStorage.getItem(`${test._id}-${userId}-answers`);
            if (currentAnswer == undefined) {
                setAnswer('');
            } else {
                let parsedAnswers = JSON.parse(answers || '{}');
                setAnswer(parsedAnswers[Number(problemNumber) - 1]);
            }
        }
    });

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

    function saveAnswer(value: string) {
        if (typeof window !== undefined && window.localStorage) {
            let currentAnswers = window.localStorage.getItem(`${test._id}-${userId}-answers`);
            if (currentAnswers == undefined) {
                let answers = [];
                for (let i = 0; i < test.problems.length; i++) {
                    answers.push('');
                }
                window.localStorage.setItem(`${test._id}-${userId}-answers`, JSON.stringify(answers));
            } else {
                let parsedAnswers = JSON.parse(currentAnswers);
                parsedAnswers[Number(problemNumber) - 1] = value;
                window.localStorage.setItem(`${test._id}-${userId}-answers`, JSON.stringify(parsedAnswers));
            }
        }
    }

    return (
        <>
            <Box component="form" sx={{ height: '5vh', width: '80vw', maxWidth: '700px', backgroundColor: 'lightgray' }} className={`border-b-[0.5vh] border-black`}>
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
                        saveAnswer(e.target.value);
                    }}
                    value={answer}
                />


                {/* This is a really stupid way to handle FormData being passed to the form but im too lazy to change it */}
                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="answers"
                    name="answers"
                    value={typeof window !== undefined && window.localStorage ? window.localStorage.getItem(`${test._id}-${userId}-answers`) || "" : ""}
                    onChange={(e) => { }}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="test"
                    name="test"
                    value={JSON.stringify(test)}
                    onChange={(e) => { }}
                />

                <input
                    className={`w-[0%] h-[0%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={(e) => { }}
                />

                <Box sx={{ width: '100%', height: '8vh', left: '0%', bottom: '0vh', position: "absolute", display: 'flex', alignItems: 'center', justifyContent: 'center', paddingX: { 'MobileL': '20px', 'MobileS': '5px' }, gap: '15px' }}>
                    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: { 'MobileL': '20px', 'MobileS': '5px' }, paddingBottom: 0.5, zIndex: 1600 }}>
                        <Button
                            onClick={() => {
                                handleProblemChange(problemNumber.toString(), -1);
                                saveAnswer(answer);
                            }}
                            variant='contained'
                            sx={{ backgroundColor: 'primary.light', borderRadius: '30px', fontSize: { MobileL: '15px', MobileS: '10px' } }}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={() => {
                                handleProblemChange(problemNumber.toString(), 1);
                                saveAnswer(answer);

                                if (test.problems.length == Number(problemNumber)) {
                                    let answers = typeof window !== undefined && window.localStorage ? JSON.parse(window.localStorage.getItem(`${test._id}-${userId}-answers`) || "") : [""];

                                    upsertAnswers(answers, userId, test);
                                    replace("/competition/individual"); //TODO: Need to make paths a variable so i don't have to change every instance when i change the path   
                                }
                            }}
                            variant='contained'
                            sx={{ backgroundColor: 'primary.light', borderRadius: '30px', fontSize: { MobileL: '15px', MobileS: '10px' } }}
                            type="button"
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