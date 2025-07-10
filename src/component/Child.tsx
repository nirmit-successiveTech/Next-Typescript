"use client"
interface Prop{
    increment:()=>void,
    decrement:()=>void,
    resetVal:()=>void,
    count:number,
}

export default function Child({increment,decrement,resetVal,count}:Prop){
    return(
        <div>
            <div>{count}</div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <div><button onClick={resetVal}>Reset</button></div>
        </div>
    )
}