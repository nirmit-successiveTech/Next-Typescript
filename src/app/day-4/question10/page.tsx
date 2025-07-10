"use client"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";

export default function Question10() {

  const HandleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10%',
        gap: 2,
      }}
    >
      <form onSubmit={HandleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <TextField required label="Required" />
        <TextField required label="Email" type="email" />
        <TextField required label="Password" type="password" />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </Box>
  );
}
