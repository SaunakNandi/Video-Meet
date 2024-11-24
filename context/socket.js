// THis is a monolith repo where backend and frontend are running on the same domain (though ports are different) you have to just do
// const socket=io() (see the socket.io docs/v4/client-initialization)

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";   // io is the client-side module that allows you to connect to a Socket.IO server.

const SocketContext=createContext(null)

export const useSocket=()=>{
    const socket=useContext(SocketContext)
    return socket
}

export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null)

    useEffect(()=>{
        const connection=io()
        setSocket(connection)  // establish the socket connection
    },[])
    socket?.on('connect_error',async(err)=>{
        console.log("Error Established socket",err)
        await fetch('/api/socket') // manually trigger our socket connectioin if there is a connection error
    })
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}