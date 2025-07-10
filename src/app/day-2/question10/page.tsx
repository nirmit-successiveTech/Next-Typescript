"use client"
import { useLanguage } from "../context/LanguageContext"

export default function Q10(){

    const {language,toggle} = useLanguage();

    return(
        <div>
            {language}
            <button onClick={toggle}>change</button>
        </div>
    )
}