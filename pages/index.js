import { useRouter } from "next/navigation";
import styles from '@/styles/home.module.css'
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
// client Side
export default function Home() {
  
  const [roomId,setRoomId]=useState('')
  const router=useRouter()
  const createAnJoin=()=>{
    const roomId=uuidv4()
    router.push(`/${roomId}`)
  }
  const joinRoom=()=>{
    if(roomId) router.push(`/${roomId}`)
    else alert('Enter valid room Id')
  }
  return (
    <>
      <div className={styles.homeContainer}>
        <h1>Video Meet</h1>
        <div className={styles.enterRoom}>
          <input placeholder="Enter room Id" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <span className={styles.separatorText}>===============OR===============</span>
        <button onClick={createAnJoin}>Create a new room</button>
      </div>
    </>
  );
}
