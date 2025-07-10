"use client"
import { useCallback, useState } from "react"
import Child from "./Child";

export default function Parent(){
    const [count,setcount] = useState<number>(0);

    const increment =useCallback(()=>{
        setcount(count+1);
    },[count])

        const decrement =useCallback(()=>{
        setcount(count-1);
    },[count])

    const resetVal=useCallback(()=>{
        setcount(0)
    },[count])

    return(
        <div>
            <Child increment={increment} decrement={decrement} resetVal={resetVal} count={count} />
        </div>
    )
}