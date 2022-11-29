import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

import { Button, TextField } from "@mui/material";
import logo from "./../../assets/image/logo.png";
import register_big from "./../../assets/image/register_img_big.png";
import GoogleIcon from "@mui/icons-material/Google";

export default function Register() {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (!data.name || !data.email || !data.password || !confirmPassword) {
      setData({ ...data, error: "All fields are required!" });
      return;
    } else if (confirmPassword !== data.password) {
      console.log("Passwords do not match! Enter again."); // Replace with Toast
      return;
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
        <div className="grid grid-cols-1 mx-[5%] sm:mx-[5%] md:mx-[15%]">
          <div className="grid grid-cols-3 place-items-center place-content-center m-auto">
            <img src={logo} alt="" className="hover:animate-pulse contain m-auto h-[70px] w-[70px]" />
            <div className="text-4xl uppercase mt-5 mb-1 col-span-2 text-[#2d5abf]">Hey There!</div>
          </div>
          <div className="font-semibold col-span-2 mx-[-20%] text-[#1565c0]">
            Welcome to our world where you can have access to getting personalized song recommendations based on your current emotion with our revolutionary chatbot!
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

          <TextField
            name="confirm_password"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            sx={{ my: 1 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{ mt: 3, p: 1 }}
            onClick={RegisterUser}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, p: 1 }}
            endIcon={<GoogleIcon />}
            fullWidth
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
      <div className="hidden h-[100vh] bg-[#2d5abf] sm:flex  flex-col justify-center">
        <div>
          <img src={register_big} alt="" />
        </div>
        <div className="text-white font-semibold text-center">
          Hi! We are so Glad you made it here! We'd love to chat and recommend music! Jump right in!
        </div>
      </div>
    </div>
  );
}
