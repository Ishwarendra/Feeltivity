import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";

import { Button, TextField } from "@mui/material";
import logo from "./../../assets/image/logo.png";
import logo_big from "./../../assets/image/logo_big.png";
import GoogleIcon from "@mui/icons-material/Google";
// import { Construction } from "@mui/icons-material";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LogInUser = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setData({ ...data, error: "All fields are required!" });
    }
    const result = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    navigate("/");
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

      {/* Left Side */}
      <div className="hidden h-[100vh] bg-[#2d5abf] sm:text-center sm:align-middle sm:flex sm:flex-col justify-center">
        <div className="flex justify-center">
          <img src={logo_big} alt="" className="h-[300px] w-[300px]" />
        </div>
        <div className="bold text-white text-6xl uppercase">Feeltivity</div>
        <div className="text-white font-semibold mx-5">
          Hey Lovely user! We really hope that you are doing great! Why not chat and hear some music together again?
        </div>
      </div>

      <div className="text-center mx-[10%] flex flex-col justify-evenly">
        <div className="block">
          <img src={logo} alt="" className="hover:animate-pulse cover m-auto h-[80px] w-[80px]" />
          <div className="text-4xl uppercase mt-5 mb-1 text-[#2d5abf]">Hey! You came!</div>
          <div className="font-medium text-[#2d5abf]">
            Welcome Back song lover. Login to revisit the experience of personalized songs based on your emotions right now! 
          </div>
        </div>

        <form className="grid grid-cols-1 mx-[5%] sm:mx-[5%] md:mx-[15%]">
          <TextField
            name="email"
            id="outlined-username-input"
            label="Email"
            type="username"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          {/* Add onChange = {function} when making function */}
          <TextField
            name="password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={handleChange}
          />

          <Button variant="contained" sx={{ mt: 5, p: 1 }} onClick={LogInUser}>
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, p: 1 }}
            startIcon={<GoogleIcon />}
          >
            Sign In With Google
          </Button>
        </form>

        <div>
          Don't have an account yet?
          <Link type="text" to={"/register"}>
            <Button variant="text">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
