"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface MyAuth {
  myval: boolean;
  setmyval: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<MyAuth | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [myval, setmyval] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ myval, setmyval }}>
      {children}
    </ThemeContext.Provider>
  );
}
