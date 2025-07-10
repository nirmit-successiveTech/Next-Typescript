"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  
}

interface WithDataFetchingProps {
  mydata: User[];
}

export default function withDataFetching<P>(
  Component: React.ComponentType<P & WithDataFetchingProps>
) {
  return function DataFetched(props: P) {
    const [mydata, setMydata] = useState<User[]>([]);

    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setMydata(response.data);
      } catch (error) {
        console.log("some error q16", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div>
        <Component {...props} mydata={mydata} />
      </div>
    );
  };
}
