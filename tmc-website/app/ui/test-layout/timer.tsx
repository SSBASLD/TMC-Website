'use client'

import { upsertAnswers } from "@/app/lib/actions";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Timer({ testID }: { testID: string }) {
    const [time, setTime] = useState(60 * 60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const savedTime = Number(window.localStorage.getItem(`${testID}-savedTime`)) || 60 * 60;

            if (savedTime == time) return;

            setTime(savedTime);
        }
    });

    useEffect(() => {
        if (!isActive || time === 0) return;

        const interval = setInterval(() => {
            saveTime();
            setTime(time - 1);
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
            window.localStorage.setItem(`${testID}-savedTime`, `${time - 1}`);
        }
    }

    return (
        <>
            <Typography sx={{ fontSize: '3vh', color: 'black', marginLeft: 'auto', position: "absolute", right: '1vw' }}>Timer - {formatTime(time)}</Typography>
            <Button variant="contained" onClick={() => { }}></Button>
        </>
    );
}