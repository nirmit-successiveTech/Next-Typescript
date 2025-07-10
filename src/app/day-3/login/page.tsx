"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/day-2/context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Login() {


  const { myval, setmyval } = useAuth(); // destructure from context
  const [name, setname] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const Handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "nirmit" && password === "123") {
      setmyval(true);
      setTimeout(() => {
        router.push("/day-3/aboutpage");
      }, 2000);
    } else {
      console.log("error");
    }

    setname("");
    setpassword("");
  };



  const style = {
    light: { backgroundColor: "#fff", color: "#000", minHeight: "100vh" },
    dark: { backgroundColor: "#222", color: "#fff", minHeight: "100vh" },
  };

  return (
    <div style={style[theme]}>
      <button
        onClick={toggleTheme}
        style={{
          margin: "5px",
          backgroundColor: "rgb(49, 137, 221)",
          color: "white",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Toggle Theme
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <form
            onSubmit={Handlesubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "200px",
              textAlignLast: "center",
            }}
          >
            <div style={{ fontSize: "40px", fontWeight: "bold" }}>Log In</div>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "rgb(49, 137, 221)",
                  color: "white",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "20px",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
          <p>
            Authenticated: <strong>{myval ? "Yes" : "No"}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
