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

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        width: 500,
        height: 500,
        color: lightBlue,
    },
});

const QuestionBox = ({ number }: { number: string }) => {
    return (<Grid2 size={12 / 9}>
        <Box sx={{ height: 'auto', aspectRatio: 1, border: "dashed", borderWidth: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: 20 }}>
                {number}
            </Typography>
        </Box>
    </Grid2 >);
}

const BoxGrid = ({ amount }: { amount: number }) => {
    let boxes = [];
    for (let i = 1; i <= amount; i++) {
        boxes.push(<QuestionBox number={i.toString()}></QuestionBox>);
    }

    return (
        <Grid2 container spacing={2}>
            {boxes}
        </Grid2>
    )
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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

    return (
        <div className={`overflow-hidden overflow-y-hidden w-screen h-screen p-0 m-0`}>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                <Box sx={{ width: '100%', height: '100%' }}>
                    <Box sx={{ backgroundColor: 'primary.main', height: '8vh', width: '100%' }} className={`border-b-[0.5vh] border-black`}></Box>

                    <Box sx={{ height: '84vh' }}>
                    </Box>

                    <Box sx={{ height: '8vh', backgroundColor: 'primary.main', width: '100%' }} className={`border-t-[0.5vh] border-black`}>

                        <Box sx={{ width: '100%', height: '7vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
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
                                            Problem 1 of {amountOfProblems}
                                            <ExpandMoreIcon></ExpandMoreIcon>
                                        </Button>
                                    </Tooltip>
                                </div>
                            </ClickAwayListener>
                        </Box>

                        <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', userSelect: 'none', paddingX: '5%', gap: '15px' }}>
                            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
                                <Button variant='contained' sx={{ backgroundColor: 'primary.light', borderRadius: '30px' }}>Back</Button>
                                <Button variant='contained' sx={{ backgroundColor: 'primary.light', borderRadius: '30px' }}>Next</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider >
        </div >
    );
}
