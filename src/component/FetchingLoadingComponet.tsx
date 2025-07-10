"use client"

import axios from "axios";
import { useEffect, useState } from "react"

interface User{
    name:string,
    id: number;
    [key: string]: any;
}

export default function FetchLoadingComponent(){

    const [datavalue,setdatavalue]=useState<User[]>([]);
    const [loading,setloading]=useState<boolean | null>(true);
    const [error,seterror]=useState<boolean | null>(null);

    const fetchData=async()=>{
        try {
            const fetchvalue = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            setdatavalue(fetchvalue.data);
            setloading(false);
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

    if(loading){
        return(
            <div>Loading............</div>
        )
    }

    return(
        <div>
            {datavalue.map((item,index)=>(
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}