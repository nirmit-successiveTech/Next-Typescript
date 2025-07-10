"use client";
import { useState } from "react";

export default function PersonForm() {
  const [firstname, setfirstname] = useState<string>();
  const [lastname, setlastname] = useState<string>("");
  const [age, setage] = useState<number>();
  return (
    <div style={{ width: "50%", margin: "auto", paddingTop: "20px" }}>
      <div>
        <form>
          <div >
            <input
              type="text"
              placeholder="Enter Your Firstname"
              onChange={(e) => setfirstname(e.target.value)}
              className="border-2 mb-5"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your LastName"
              onChange={(e) => setlastname(e.target.value)}
              className="border-2 mb-5"

            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Your age"
              onChange={(e) => setage(Number(e.target.value))}
              className="border-2 mb-5"

            />
          </div>
        </form>
      </div>

      <div
        style={{
          margin: "auto",
          width: "50%",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <div>{firstname}</div>
        <div>{lastname}</div>
        <div>{age}</div>
      </div>
    </div>
  );
}
