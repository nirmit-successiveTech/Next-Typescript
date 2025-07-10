interface Task{
    list:string[]
}
export default function Task({list}:Task){
    return(
        <div className="text-center pt-8">
            <div>Taks are:</div>
            {list.map((item,index)=>(
                <div>{item}</div>
            ))}
        </div>
    )
}