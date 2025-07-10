

interface ButtonStyle{
    color:string;
    text:string;
}

export default function ButtonStyle({text,color}:ButtonStyle){
    return (
        <div>
            <button style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}
    