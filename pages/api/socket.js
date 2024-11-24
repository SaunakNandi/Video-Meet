import {Server} from "socket.io"

// By attaching io to res.socket.server, you ensure that the WebSocket server is linked to the same HTTP server that powers the Next.js application

// This is an api and it is needed to be called explicitly
const SocketHandler=(req,res)=>{
    console.log(res)
    if(res.socket.server.io) // check if socket server already created or not
        console.log("socket already running")
    else{
        const io=new Server(res.socket.server)
        res.socket.server.io=io  // attaching WebSocket server to the http server that serves the NextJs application
    
        // whenever a browser estamblishes a web socket connection this io.on() triggers a callback
        io.on('connection',(socket)=>{
            // socket connetion is used to broadcast event to other rooms/client, we can listen/event events
            console.log("server is connected")
        })
    }
    res.end()
}

export default SocketHandler