"use client"
import { useCallback, useState } from "react"

interface Prop{
    id:number,
    title:string,
    completed:Boolean,
}

export default function TaskStatus(){
    const [task,settask]=useState<Prop[]>([  
        {id:1,title:'Java',completed:false},
        {id:2,title:'Cpp',completed:false},
        {id:3,title:'Python',completed:false},
        {id:4,title:'Gym',completed:false},
        {id:5,title:'Eat',completed:false},
]);

    const completeTask=useCallback((id:number)=>{
        settask((prev)=>prev.map((task)=>task.id===id?{...task,completed:true}:task))
    },[])

    return(
        <div style={{display:'flex',margin:'auto',width:"50%",paddingTop:'20px',justifyContent:'center',flexDirection:'column',gap:'20px',textAlign:'center'}}>
            {task.map((item,index)=>(
                <div key={index}>
                    <div>
                        <div style={{fontSize:'40px',paddingBottom:'10px'}}>{item.title}</div>
                        <button onClick={()=>completeTask(item.id)} style={{backgroundColor:'black',color:'white',padding:'10px',fontSize:'20px'}}>{item.completed?'Completed':'Complete'}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}