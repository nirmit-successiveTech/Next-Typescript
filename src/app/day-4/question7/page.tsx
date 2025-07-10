"use client"
import React, { useEffect, useState } from "react";



export default function Question7() {
  const [list, setlist] = useState<string>('');
  const [todo, settodo] = useState<string[]>(['eat', 'sleep', 'coding', 'gym', 'walk', 'movie']);
  const [flag, setflag] = useState<boolean>(false);

  const HandleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setflag(prev => !prev); // toggle flag
  };

  useEffect(() => {
    let id;
    id = setInterval(() => {
      settodo(prev => prev.filter(item => item === list));
    }, 2000);
    return ()=>clearInterval(id);
  }, [list]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10%',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          className="border-1 p-1"
          placeholder="Enter the task to-do"
          onChange={(e) => setlist(e.target.value)}
          value={list}
        />
      </div>

      <button onClick={HandleClick} style={{ marginBottom: '20px' }} className="border-1 p-1 bg-blue-700 text-white">
        Find
      </button>

      <div>
        {todo.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
