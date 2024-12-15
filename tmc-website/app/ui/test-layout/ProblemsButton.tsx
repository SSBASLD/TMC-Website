'use client'

import { inter } from "@/app/ui/fonts";
import { Card, CardActions, Button, Box, ThemeProvider, CssBaseline, Tooltip, tooltipClasses, TooltipProps, Grid2, Typography } from "@mui/material";
import { blue, lightBlue, red, yellow } from "@mui/material/colors";
import { theme } from "@/theme.config";
import { forwardRef, useState } from "react";
import { ClassNames } from "@emotion/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';
import { useSearchParams } from "next/navigation";
import IndividualProblem from "@/app/ui/test-layout/IndividualProblem";

const QuestionBox = ({ boxNumber }: { boxNumber: string }) => {
    return (
        <Grid2 size={12 / 9} key={boxNumber}>
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
        <Grid2 container spacing={2}>
            {boxes}
        </Grid2>
    )
}

export default function ProblemsButton({ problemNumber }: { problemNumber?: string }) {
    const amountOfProblems = 100;

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleToolTipToggle = () => {
        setOpen(!open);
    }

    const handleTooltipOpen = () => {
        setOpen(true);
    };


    return (<Box sx={{ width: '100%', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
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
                            <BoxGrid amount={amountOfProblems}></BoxGrid>
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
                    <Button variant="contained" sx={{ backgroundColor: 'black', gap: '5px', maxHeight: '70%' }} onClick={handleToolTipToggle}>
                        Problem {problemNumber ? problemNumber : 1} of {amountOfProblems}
                        <ExpandMoreIcon sx={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }}></ExpandMoreIcon>
                    </Button>
                </Tooltip>
            </div>
        </ClickAwayListener>
    </Box>)
}