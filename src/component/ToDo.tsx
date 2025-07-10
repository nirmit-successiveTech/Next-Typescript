"use client"
import { useState } from "react"

export default function ToDo(){

    const [name,setname]=useState<string>('');
    const [list,setlist]=useState<string[]>([]);

    const handleClick=():void=>{
        setlist([...list,name]);
        setname('')
    }

    return(
        <div className="text-center mt-20">
            <div><input type="text" className="border-2" placeholder="Enter the task todo" value={name} onChange={(e)=>setname(e.target.value)} /></div>
            <div><button className="bg-blue-300 pl-4 pr-4" onClick={handleClick}>Add</button></div>
            <div>
                {list.map((item,index)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}