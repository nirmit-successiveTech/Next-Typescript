"use client"

import axios from "axios";

import { useEffect, useState } from "react"

    interface User {
    id: number;
    name: string;
   [key: string]: any; 
}

export default function Question2(){
    const [datavalue,setdatavalue]=useState<User[]>([]);
    const [error,seterror]=useState<boolean | null>(null);

    const fetchData=async()=>{
        try {
            const fetchvalue = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            setdatavalue(fetchvalue.data);
            seterror(false);
        } catch (error) {
            seterror(true);
            console.log("some error",error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(error){
        return(
        <div>
            <button onClick={fetchData}>Retry</button>
        </div>
        )

    }

    return(
        <div>
            {datavalue.map((item,index)=>(
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}