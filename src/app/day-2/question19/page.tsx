"use client"
import { useState, ChangeEvent } from "react"
import useClipboard from "../hook/useClipboard"


export default function Question19() {
  const [val, setVal] = useState<string>("")
  const { status, copy } = useClipboard ()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  return (
    <div style={{ width: "50%", textAlign: "center", margin: "auto", paddingTop: "20px" }}>
      <div>
        <input
          type="text"
          value={val}
          onChange={handleChange}
          style={{ padding: "10px", width: "500px" ,border:'2px solid black'}}
        />
        <div>
          <button
            onClick={() => copy(val)}
            style={{
              color: "white",
              backgroundColor: "rgb(49, 137, 221)",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            disabled={!val.trim()}
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  )
}
