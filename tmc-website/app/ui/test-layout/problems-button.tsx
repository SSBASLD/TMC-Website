'use client'

import { Button, Box, Tooltip, Grid2, } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IndividualProblem from "@/app/ui/test-layout/individual-problem";

const QuestionBox = ({ boxNumber }: { boxNumber: string }) => {
    return (
        <Grid2 size={{ Tablet: 12 / 9, MobileS: 12 / 6 }} key={boxNumber}>
            <IndividualProblem number={boxNumber}></IndividualProblem>
        </Grid2 >
    );
}

const BoxGrid = ({ amount }: { amount: number }) => {
    let boxes = [];
    for (let i = 1; i <= amount; i++) {
        boxes.push(<QuestionBox boxNumber={i.toString()}></QuestionBox>);
    }

    return (
        <Grid2 container spacing={{ Tablet: 2, MobileS: 1 }}>
            {boxes}
        </Grid2>
    )
}

export default function ProblemsButton({ problemNumber, amount }: { problemNumber?: string, amount: number }) {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleToolTipToggle = () => {
        setOpen(!open);
    }


    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <Tooltip
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                        <Box sx={{ padding: 1, overflowY: 'scroll', overflowX: 'none', height: '100%' }}>
                            <BoxGrid amount={amount}></BoxGrid>
                        </Box>
                    }
                    arrow
                    slotProps={{
                        tooltip: {
                            sx: {
                                maxWidth: 500,
                                width: '80vw',
                                height: 500,
                                bgcolor: 'white',
                                boxShadow: 5,
                                color: 'black',
                                '& .MuiTooltip-arrow': {
                                    color: 'white',
                                    fontSize: 30,
                                }
                            }
                        },
                        popper: {
                            disablePortal: true,
                        },
                    }}
                >
                    <Button variant="contained" sx={{ backgroundColor: 'black', gap: '5px', maxHeight: '70%', fontSize: { MobileM: '15px', MobileS: '10px' } }} onClick={handleToolTipToggle}>
                        Problem {problemNumber ? problemNumber : 1} of {amount}
                        <ExpandMoreIcon sx={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }}></ExpandMoreIcon>
                    </Button>
                </Tooltip>
            </div>
        </ClickAwayListener>
    )
}