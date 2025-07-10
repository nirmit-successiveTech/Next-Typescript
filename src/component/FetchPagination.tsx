"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function FetchPagination(){

  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: ' name', width: 130 },
  { field: 'username', headerName: 'USER name', width: 130 },
  {
    field: 'email',
    headerName: 'email',
    width: 90,
  },

];  

 
  const [mydata,setmydata]=useState<User[]>([]);
  const fetchdata=async()=>{
    try {
          const fetchedvalue = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const users = fetchedvalue.data.map(({id,name,username,email})=>({
      id,
      name,
      username,
      email
    }))
    setmydata(users);
    } catch (error) {
      console.log("some error")
    }



  }

  useEffect(()=>{
    fetchdata()
  },[])

  const paginationModel = { page: 0, pageSize: 3 };

  return(
        <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={mydata}
        columns={columns}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 5]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}