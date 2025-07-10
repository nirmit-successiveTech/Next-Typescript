"use client"
import { useMemo, useState } from "react"

export default function StudentList(){
    
    const [name,setname]=useState<string[]>(['nirmit','ayush','ankit','ujjwal','rohan','anurag'])
    const [newname,setnewname]=useState<string>('');

    function AddName(){
        setname([...name,newname]);
        setnewname('')
    }

    const students = useMemo(()=>{
        return name;
    },[name])

    return(
        <div style={{width:'50%',margin:'auto',textAlign:'center',display:'flex',flexDirection:'column',gap:'20px',paddingTop:'20px',fontSize:'29px'}}>
            {students.map((item,index)=>(
                <div key={index}>
                    {item}
                </div>
            ))}
            <div>
                <div><input type="text" placeholder="Enter the Name" value={newname} onChange={(e)=>setnewname(e.target.value)} style={{padding:'10px'}}/></div>
                <div style={{paddingTop:'15px'}}>
                    <button onClick={AddName} style={{backgroundColor:'green',color:'white',border:'none',width:'100px',borderRadius:'10px'}} >Add</button>
                </div>
            </div>
        </div>
    )
}