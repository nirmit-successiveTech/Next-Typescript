"use client"
import Button from '@mui/material/Button';

interface Prop{
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export default function DumbButton({color}:Prop){
    return(
        <div>
            <Button color={color} onClick={()=>alert("Hello user")}>Perform</Button>
        </div>
    )
}