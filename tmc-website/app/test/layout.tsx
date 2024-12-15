'use server'

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
import ProblemsButton from "@/app/ui/test-layout/ProblemsButton";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={`overflow-hidden overflow-y-hidden w-screen h-screen p-0 m-0`}>
            {children}
        </div >
    );
}
