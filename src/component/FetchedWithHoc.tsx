"use client";

import withDataFetching from "@/app/hoc/withDataFetching";
import React from "react";

interface User {
  id: number;
  name: string;
  // add other fields if needed
}

interface FetchedWithHocProps {
  mydata: User[];
}

function FetchedWithHoc({ mydata }: FetchedWithHocProps) {
  return (
    <div>
      {mydata.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

const TryHoc = withDataFetching(FetchedWithHoc);

export default TryHoc;
