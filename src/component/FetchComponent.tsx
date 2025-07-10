
const fetchdata=()=>{
    const datavalue = fetch('https://jsonplaceholder.typicode.com/users')
                        .then((response)=>response.json())
                        .then((data)=>{
                            console.log(data);
                            return data;
                        })
                        .catch((error)=>console.log("error fetching data",error));

                        return datavalue;
}

export default async function FetchComponent(){
    let fetchvalue;
    try {
         fetchvalue = await fetchdata();
    } catch (error) {
        console.log("some error",error);
    }

    return(
        <pre>
            {JSON.stringify(fetchvalue,null,4)}
        </pre>
    )
} 