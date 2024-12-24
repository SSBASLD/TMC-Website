'use client'

import { theme } from "@/theme.config";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <div className={`overflow-hidden overflow-y-hidden w-screen h-screen p-0 m-0`}>
                {children}
            </div >
        </ThemeProvider>
    );
}
