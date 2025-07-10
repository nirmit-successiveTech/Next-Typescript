"use client";

import { useTheme } from "../context/ThemeContext";

export default function Q9() {
  const { theme, toggleTheme } = useTheme();

  const style = {
    light: {
      backgroundColor: "white",
      color: "black",
      padding: "1rem",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      padding: "1rem",
    },
  };

  return (
    <div style={style[theme]}>
      <div>hello</div>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
}
