import Player from "@/component/Player"
import useMediaStream from "@/hooks/useMediaStream"

import { useSocket } from "@/context/socket"
const { default: usePeer } = require("@/hooks/usePeer")
const { useEffect } = require("react")

const Room=()=>{
    const socket=useSocket()
    const {peer,myId}=usePeer()
    const {stream}=useMediaStream()
    console.log(stream)
    return (
        <>
        <div>
            <Player url={stream} muted playing playerId={myId}/>
        </div>
        </>
    )
}

export default Room