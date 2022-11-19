import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

import { Button, TextField } from "@mui/material";
import logo from "./../../assets/image/logo.ico";
import GoogleIcon from "@mui/icons-material/Google";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  let { name, email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!data.name || !data.email || !data.password) {
      setData({ ...data, error: "All fields are required!" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        name,
        uid: result.user.uid,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* Content (Username, password, ) + Image */}
      {/* Logo */}
      {/* Some Text saying hello */}
      {/* Some one-liner */}
      {/* Email*/}
      {/* Password */}
      {/* some gap then Login (sign in with google account) */}
      {/* in end Don't have an account yet? Sign Up */}

      <div className="text-center mx-[10%] flex flex-col justify-around">
        <div className="block">
          <img src={logo} alt="" className="cover m-auto" />
          <div className="text-4xl uppercase mt-5 mb-1">hello!</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            tempore?
          </div>
        </div>

        <form className="grid grid-cols-1 mx-[5%] sm:mx-[5%] md:mx-[15%]">
          <TextField
            name="name"
            label="Name"
            type="username"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          <TextField
            name="email"
            label="Email"
            type="username"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          {/* Add onChange = {function} when making function */}
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          {/* <TextField
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          /> */}

          <Button
            variant="contained"
            sx={{ mt: 5, p: 1 }}
            onClick={RegisterUser}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, p: 1 }}
            endIcon={<GoogleIcon />}
          >
            Sign In With Google
          </Button>
        </form>

        <div>
          Already Have an Account?
          <Link type="text" to={"/login"}>
            <Button variant="text">Log In</Button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden h-[100vh] bg-[#2d5abf] sm:block">
        <div className="text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempore?
        </div>
      </div>
    </div>
  );
}
