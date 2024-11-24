const { useState, useEffect, useRef } = require("react")

const useMediaStream=()=>{
    const [state,setState]=useState(null)
    const isStreamSet=useRef(false)
    useEffect(()=>{
        (async function initStream(){
            try {
                const stream=await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                })
                console.log("Setting your stream")
                setState(stream)
                
            } catch (error) {
                console.log("Error in media navigator",error)
            }
        })()
        isStreamSet.current = true;

    },[])
    return {
        stream:state
    }
}

export default useMediaStream