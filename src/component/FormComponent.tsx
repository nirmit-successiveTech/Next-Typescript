"use client";

import axios from "axios";
import { useState } from "react";

export default function FormComponent() {
  const [text, setText] = useState<string>("");
  const [number, setNumber] = useState<number | undefined>();
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        text,
        number,
        password,
      });

      if (response.status) {
        setStatus(`Submitted successfully! Status: ${response.status}`);
      }
    } catch (error: any) {
      setStatus(`Submission failed: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter the name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="number"
          placeholder="Enter the number"
          onChange={(e) => setNumber(Number(e.target.value))}
          value={number ?? ""}
        />
        <input
          type="password"
          placeholder="Enter the password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{status}</div>
    </div>
  );
}
