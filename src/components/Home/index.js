/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import loginPic from "assets/images/login_pic.png";
import { Alert, Box, Snackbar } from "@mui/material";
import H1 from "common/H1";
import "./home.css";
import Input from "common/Input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomLinks from "common/CustomLinks";
import EmployeeButton from "common/EmployeeButton";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setlogindata } from "actions/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.loggeduser);
  console.log(loggedUser.message);
  useEffect(() => {
    if (loggedUser.message === "success") {
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth");
    } else {
      toast.error(loggedUser.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  }, [loggedUser]);

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setlogindata(values));
    },
  });

  return (
    <>
      <Box display="flex" minHeight="100vh">
        <Box display="flex" flex="1">
          <img src={loginPic} className="login_img" />
        </Box>
        <Box flex="1" minHeight="100vh" display={"flex"}>
          <Box display="flex" flex="1">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "38vw",
                padding: "0 5vw",
                justifyContent: "center",
              }}
            >
              <H1>Welcome! Sign In</H1>
              <form onSubmit={formik.handleSubmit}>
                <Input
                  id="email"
                  name="email"
                  label="Email  "
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                ></Input>
                <Input
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                ></Input>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ transform: "translateY(-10px)", padding: "0 0.5rem" }}
                  className="svg"
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember Me"
                    sx={{ transform: "translateY(6px)", fill: "orange" }}
                  />
                  <CustomLinks fontSize="16px" linkedto="/">
                    Forgot Password?
                  </CustomLinks>
                </Box>
                <EmployeeButton width="100%" type="submit">
                  Sign In
                </EmployeeButton>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

Home.propTypes = {
  getList: PropTypes.func,
};

export default Home;
