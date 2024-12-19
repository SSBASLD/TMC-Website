'use client'

import { Button } from "@mui/material";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";


export default function ChangeProblemButton({ title, increment, currentNumber }: { title: string, increment: number, currentNumber: string }) {
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
        <Button
            onClick={() => {
                handleProblemChange((Number(currentNumber) + increment).toString());
            }}
            variant='contained'
            sx={{ backgroundColor: 'primary.light', borderRadius: '30px', fontSize: { MobileL: '15px', MobileS: '10px' } }}
        >
            {title}
        </Button>
    );
}   