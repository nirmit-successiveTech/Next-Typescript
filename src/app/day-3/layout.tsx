import { ReactNode } from "react";
import ThemeProvider from "../day-2/context/ThemeContext";
import AuthProvider from "./context/AuthContext";

interface Prop{
    children : ReactNode
}

export default function Layout({children}:Prop){
    return(
        <>
        <ThemeProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
        </ThemeProvider>
        </>
    )
}