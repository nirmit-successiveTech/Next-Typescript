import { ReactNode } from "react";
import LanguageProvider from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";

interface LayoutProp{
    children : ReactNode
}

export default function Layout({children}:LayoutProp){
    return(
        <div>
            <ThemeProvider>
                <LanguageProvider>
                {children}
                </LanguageProvider>
            </ThemeProvider>
        </div>
    )
}