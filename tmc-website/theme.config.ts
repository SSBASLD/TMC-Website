import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        MobileS: true;
        MobileM: true;
        MobileL: true;
        Tablet: true;
        Laptop: true;
        LaptopL: true;
        FourK: true;
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0e7490',
            dark: '#64748b',
            light: '#2db6d6',
        },
        secondary: {
            main: '#f50057',
        },
    },
    breakpoints: {
        values: {
            MobileS: 320,
            MobileM: 375,
            MobileL: 425,
            Tablet: 768,
            Laptop: 1024,
            LaptopL: 1440,
            FourK: 2560,
        }
    }
});;