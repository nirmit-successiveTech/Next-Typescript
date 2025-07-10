"use client";
import { useState, useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";


export default function Question18() {
  const { setitem, getitem } = useLocalStorage("username");
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    const saved = getitem();
    if (saved) setStoredValue(saved);
  }, []);

  function handleStore() {
    setitem(inputValue);
    setStoredValue(inputValue);
    setInputValue("");
  }

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Stored Value: {storedValue || "Nothing stored yet."}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter the text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            width: "60%",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div>
        <button
          onClick={handleStore}
          style={{
            backgroundColor: "#E65182",
            color: "white",
            border: "none",
            marginTop: "20px",
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Use Storage
        </button>
      </div>
    </div>
  );
}
