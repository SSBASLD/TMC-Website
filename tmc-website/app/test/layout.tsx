'use client'

import { inter } from "@/app/ui/fonts";
import { Card, CardActions, Button, Box, ThemeProvider, CssBaseline } from "@mui/material";
import { blue, red, yellow } from "@mui/material/colors";
import { theme } from "@/theme.config";
import { addStyles, EditableMathField } from 'react-mathquill'
import { useState } from "react";
import { ClassNames } from "@emotion/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    addStyles();
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');


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
                            {/* <ClickAwayListener onClickAway={handleTooltipClose}>
                                <div>
                                    <Tooltip
                                        onClose={handleTooltipClose}
                                        open={open}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        title="Add"
                                        slotProps={{
                                            popper: {
                                                disablePortal: true,
                                            },
                                        }}
                                    >
                                        <Button onClick={handleTooltipOpen}>Click</Button>
                                    </Tooltip>
                                </div>
                            </ClickAwayListener> */}
                            /* Add tooltip to bring up the problem selection */

                            <Button variant="contained" sx={{ backgroundColor: 'black', gap: '5px', maxHeight: '70%' }}>
                                Problem 1 of 81
                                <ExpandMoreIcon></ExpandMoreIcon>
                            </Button>
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
