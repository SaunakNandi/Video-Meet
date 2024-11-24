const { useEffect, useState, useRef } = require("react")
// import peer from 'peerjs'     // navigator not defined error
// This is because NextJs import it on the server and on the serve there is no navigator

const usePeer=()=>{
    const[peer,setPeer]=useState(null)

    // whenever we connect to a peer server the peer server gives us a unique user id
    const [myId,setMyId]=useState('')
    const isPeerSet=useRef(false)
    useEffect(()=>{
        if(isPeerSet.current) return
        console.log('Before:', isPeerSet.current);
        isPeerSet.current = true
        console.log('After:', isPeerSet.current);
        // import peerjs inside useEffect so it will be imported in client side
        (async function initPeer(){
            const myPeer=new (await import('peerjs')).default()
            setPeer(myPeer)
            // documentation

//             This event indicates that the peer is ready to communicate with other peers.
// When this event is triggered, PeerJS provides a unique identifier (id) for the peer, which other peers can use to connect to it.
            myPeer.on('open',(id)=>{  // getting the id of the peer
                console.log('your peer id is '+id)
                setMyId(id)
            })
        })()
    },[])
    return {peer,myId}
}
export default usePeer