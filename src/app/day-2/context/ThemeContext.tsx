"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType{
    theme : Theme;
    toggleTheme : () => void;
}

const MyTheme = createContext<ThemeContextType>({
    theme:'light',  
    toggleTheme:()=>{}
});

export const useTheme =()=> useContext(MyTheme);

export default function ThemeProvider({children}:any){

    const [theme,setTheme] = useState<Theme>('light');
    const toggleTheme=()=>{
        setTheme((prev)=>(prev==='light'?'dark':'light'));
    }


    return(
        <div>
            <MyTheme.Provider value={{theme,toggleTheme}}>
                {children}
            </MyTheme.Provider>
        </div>
    )
}