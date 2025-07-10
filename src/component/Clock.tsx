"use client"
import { useEffect, useState } from "react"

export default function Clock(){
    
    const [time,settime] = useState<string>('');
    console.log(time);

    useEffect(()=>{
        let id=setInterval(() => {
            settime(new Date().toLocaleTimeString());
        }, 1000);
        return ()=>clearInterval(id);
    },[])

    return(
        <div>
            {time}
        </div>
    )
}