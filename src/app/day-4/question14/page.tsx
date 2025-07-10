"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}


export default function Question13() {
  const initialValues:FormValues = {
    name: "",
    email: "",
    password: "",
  };

  const validateSchema = Yup.object({
    name: Yup.string()
      .min(8, "At least 8 letters are needed")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is needed"),
  });

  const handleFormSubmit = (values:FormValues) => {
    console.log("Form values", values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={handleFormSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
                <div style={{fontSize:"40px"}}>Log In</div>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <button type="submit" style={{ marginTop: "16px", width: "100%" }} className="border-1 bg-blue-700 text-white">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
