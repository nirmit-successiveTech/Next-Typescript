"use client"
import { createContext, useContext, useState } from "react";

type Language = "Welcome to Nextjs" | "Hola NextJs"

interface MyLanguage{
    language:Language;
    toggle:()=>void;
}

const LanguageSwitcher = createContext<MyLanguage>({
    language:'Welcome to Nextjs',
    toggle:()=>{},
})

export const useLanguage =()=>useContext(LanguageSwitcher)

export default function LanguageProvider({children}:any){

    const [language,setlanguage] = useState<Language>('Welcome to Nextjs');
    const toggle=()=>{
        setlanguage((prev)=>prev=='Welcome to Nextjs'?'Hola NextJs':'Welcome to Nextjs')
    }

    return(
        <div>
            <LanguageSwitcher.Provider value={{language,toggle}}>
            {children}
            </LanguageSwitcher.Provider>
        </div>
    )
}