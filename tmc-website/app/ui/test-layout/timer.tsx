'use client'

import { upsertAnswers } from "@/app/lib/actions";
import { Test } from "@/app/lib/definitions";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Timer({ testID, userId, test }: { testID: string, userId: string, test: Test }) {

    const { replace } = useRouter();

    const [time, setTime] = useState(test.timeLimit * 60);
    const [isActive, setIsActive] = useState(true);

    console.log(time);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            //Probably a better way to do this, but I did this because 0 counts as false for the || statement, so it would never reach 0
            const savedTime = window.localStorage.getItem(`${testID}-${userId}-savedTime`) != undefined ? Number(window.localStorage.getItem(`${testID}-${userId}-savedTime`)) : test.timeLimit * 60;

            console.log(savedTime);

            if (savedTime == time) return;

            setTime(savedTime);
        }
    });

    useEffect(() => {

        const interval = setInterval(() => {
            saveTime();
            setTime(time - 1);

            if (time <= 0) {
                let answers = typeof window !== undefined && window.localStorage ? JSON.parse(window.localStorage.getItem(`${test._id}-${userId}-answers`) || "") : [""];

                upsertAnswers(answers, userId, test)
                replace("/competition");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, time]);


    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Add leading zero if seconds or minutes are less than 10
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    function saveTime() {
        if (typeof window !== undefined && window.localStorage) {
            console.log(time - 1);
            window.localStorage.setItem(`${testID}-${userId}-savedTime`, `${time - 1}`);
        }
    }

    return (
        <>
            <Typography sx={{ fontSize: '3vh', color: 'black', marginLeft: 'auto', position: "absolute", right: '1vw' }}>Timer - {formatTime(time)}</Typography>
        </>
    );
}