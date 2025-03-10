'use client'

import { useSocket } from "@/hooks/useSocket"
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function TeamPending({ teamId, userId }: { teamId: string, userId: string }) {
    const { isConnected, teamMemberConnect, teamConnections } = useSocket();

    useEffect(() => {
        if (isConnected) {
            teamMemberConnect(teamId, userId);
        }
    });

    return (
        <>
            <Box sx={{ bgcolor: 'white', height: '100%', width: '100%', position: 'absolute', textAlign: "center", zIndex: '100000', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'black', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '2.5vh' }}>Wait for your team captain to start the test</Typography>
                <Typography sx={{ fontSize: '2.5vh' }}>Number of teammates connected:</Typography>
                <Typography sx={{ fontSize: '2.5vh' }}>{teamConnections ? teamConnections[teamId].length : ""}</Typography>
            </Box>
        </>
    );
}