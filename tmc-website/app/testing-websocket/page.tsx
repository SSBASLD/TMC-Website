'use client'

import { useEffect } from 'react'
import io from 'Socket.IO-client'
let socket;

export default async function Page() {
    useEffect(() => {
        socketInitializer();
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })
    }

    return null
}