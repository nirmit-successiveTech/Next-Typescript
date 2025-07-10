"use client"

import { useState } from "react";

export default function Question1() {
    const [name,setname]=useState<string>('')
  return (
    <div style={{ margin: "auto", width: "50%", textAlign: "center",paddingTop:"25%" }}>
      <input
        type="text"
        placeholder="Enter the Name"
        className="border-1"
        onChange={(e) => setname(e.target.value)}
      />
      <div>{name}</div>
    </div>
  );
}
