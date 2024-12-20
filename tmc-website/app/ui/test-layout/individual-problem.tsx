'use client'

import { Box, Typography } from "@mui/material";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";

export default function IndividualProblem({ number }: { number: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    async function handleProblemChange(number: string) {
        const params = new URLSearchParams(searchParams);
        if (number) {
            params.set('problemNumber', number);
        } else {
            params.delete('problemNumber');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <Box sx={[
            {
                '&:hover': {
                    backgroundColor: 'lightblue',
                },
            },
            { height: 'auto', aspectRatio: 1, border: "dashed", borderWidth: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }
        ]} onClick={() => {
            handleProblemChange(number);
        }}>
            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: 20, pointerEvents: 'none' }} className={`select-none`}>{number}</Typography>
        </Box>
    );
}