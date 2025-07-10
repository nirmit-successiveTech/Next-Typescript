interface UserCard{
    img:string;
    email:string;
    name:string;

}

export default function UserCard({img,email,name}:UserCard){
    return(
        <div>
            <div className="border-2 p-2 w-3/12">
                <img src={img} alt="" width={200} height={200}/>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}