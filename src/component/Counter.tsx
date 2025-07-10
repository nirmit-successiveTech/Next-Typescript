"use client"
import { useState } from "react"

export default function Counter(){

    const [count,setcount]=useState<number>(0);

    return(
        <div>
            <div>{count}</div>
            <div><button onClick={()=>setcount(count+1)}>Increase</button></div>
            <div><button onClick={()=>setcount(count-1)}>Decrease</button></div>
        </div>
    )
}