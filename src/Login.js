import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const loginValidationSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Required"),
    password: yup.string().min(4, "Minimum 4 characters").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsLoggedIn(true);
      navigate("/portal/home"); 
    },
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h2>Login</h2>

        <TextField
          label="Email"
          name="email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type="submit" variant="contained" className="login-btn">
          Login
        </Button>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
