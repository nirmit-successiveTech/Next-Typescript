"use client";

import withLogger from "@/app/hoc/withLogger";
import React, { useEffect, useState } from "react";


function LoggerComponent() {
  useEffect(() => {
    console.log("LoggerComponent updated"); // logs on every render
  });

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

const LogCounter = withLogger(LoggerComponent);

export default LogCounter;
