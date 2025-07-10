"use client";
import React, { useEffect, useState } from "react";

export default function Question4() {
  const [flag, setFlag] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    
  };

  useEffect(() => {
    if (password && newPassword && password === newPassword) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [password, newPassword]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',        
        height: '100vh',             
        flexDirection: 'column',    
      }}
    >
      <form onSubmit={handleClick}>
        <input 
          className="border-1 p-1"
          type="text" 
          placeholder="Enter g-mail account" 
          style={{ display: 'block', marginBottom: 12 }} 
        />
        <input 
          className="border-1 p-1"
          type="password" 
          placeholder="Enter password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ display: 'block', marginBottom: 12 }} 
        />
        <input 
          className="border-1 p-1"
          type="password" 
          placeholder="Re-enter the password" 
          onChange={(e) => setNewPassword(e.target.value)} 
          style={{ display: 'block', marginBottom: 12 }} 
        />
        <button disabled={flag} type="submit" className="border-1 p-1 bg-blue-700 text-white" style={{ display: 'block' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
