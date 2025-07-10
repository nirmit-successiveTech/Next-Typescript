"use client"
import { useEffect, useState } from "react";

export default function Slider() {
  const Myimg: string[] = [
    "https://gravatar.com/avatar/5393df5d294a1782a303c404676e91b1?s=400&d=robohash&r=x",
    "https://robohash.org/a5e03c6168b1ea96b3e5cb2aae47370f?set=set4&bgset=&size=400x400",
    "https://gravatar.com/avatar/efe0a4a524dcf496e2f6aa44fcb85a3a?s=400&d=robohash&r=x",
    "https://robohash.org/efe0a4a524dcf496e2f6aa44fcb85a3a?set=set4&bgset=&size=400x400",
    "https://gravatar.com/avatar/44d69a256c99347210afa53425d581aa?s=400&d=robohash&r=x",
    "https://gravatar.com/avatar/c3d6de00069c3988b030f2387a80701d?s=400&d=robohash&r=x",
  ];

  const handleClick=()=>{
    const parsed = Number(val);
    settime(parsed);
  }
  
  const [count,setcount] = useState<number>(0);
  const [time,settime] = useState<number>(1000);
  const [val,setval] = useState<number>();

  useEffect(()=>{
    let id=setInterval(() => {
    setcount((prev=>(prev+1)%Myimg.length));
    }, time);

    return ()=>clearInterval(id);
  },[])

  return(
    <div>
            <div><img src={Myimg[count]} alt="" width={100} height={100} /></div>
            <div><input type="number" placeholder="enter number"  onChange={(e)=>setval(Number(e.target.value))}/></div>
            <div><button onClick={handleClick}>Set</button></div>
    </div>
  );
}
