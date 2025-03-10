import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export const useSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [teamConnections, setTeamConnections] = useState<Map<string, number> | null>();

    useEffect(() => {
        const socketIo = io();

        socketIo.on('connect', () => {
            console.log("connected");

            setIsConnected(true);
        });

        socketIo.on('team member connection', (connections: string) => {
            let connectionsMap = new Map(Object.entries(JSON.parse(connections)));
            setTeamConnections(connectionsMap);
        });

        socketIo.on('disconnect', () => {
            setIsConnected(false);
        });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, []);

    function teamMemberConnect(teamId: string, userId: string) {
        if (socket) {
            socket.emit('team member connection', userId, teamId);
        }
    }

    return { isConnected, teamConnections, teamMemberConnect };
};