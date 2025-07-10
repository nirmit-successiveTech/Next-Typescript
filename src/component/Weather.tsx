interface Weather{
    temp:number;
}

export default function Weather({temp}:Weather){
    return(
        <div>
            {temp>=25?"its hot":"its cold"}
        </div>
    )
}