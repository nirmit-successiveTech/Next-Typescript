export default function RandomNumber(){

    let RandomVal:number = Math.random()*10;
    let AnswerVal:number = Math.floor(RandomVal);
    

    return(
        <div>
            {AnswerVal}
        </div>
    )
}