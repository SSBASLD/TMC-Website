'use client'

import { Box, Typography } from "@mui/material";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

export default function IndividualProblem({ number, problemNumber }: { number: string, problemNumber?: string }) {
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
        <>
            <Box
                sx={[
                    { '&:hover': { backgroundColor: 'lightblue' } },
                    { height: '30px', aspectRatio: 1, border: "dashed", borderWidth: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }
                ]}
                onClick={() => {
                    handleProblemChange(number);
                }}
                component='button'
                type='submit'
            >
                {problemNumber == number ? <RoomOutlinedIcon sx={{ position: 'relative', top: '-20px', marginTop: '-1px' }} /> : ''}
                <Typography align='center' sx={{ position: 'absolute', fontWeight: 'bold', fontSize: 20, pointerEvents: 'none' }} className={`select-none`}>{number}</Typography>
            </Box>
        </>
    );
}