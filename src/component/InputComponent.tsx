"use client"
import { useState } from "react"



export default function InputComponent() {
    const [name, setname] = useState<string>('');
    const [val, setval] = useState<string>('');

    const HandleClick = () => {
        setval(name);
    }

    return (
        <div style={{margin:'auto',width:'50%',display:'flex',flexDirection:'column',gap:'20px',alignItems:'center',paddingTop:'25%'}}>
            <div>
            </div> <input type="text" className="border-1" placeholder="Enter the Name" onChange={(e) => setname(e.target.value)} />

            <div>
                <button onClick={HandleClick} className="border-1 p-2 bg-blue-700 text-white" >Show</button>
            </div>
            <div>{val}</div>
        </div>
    )
}