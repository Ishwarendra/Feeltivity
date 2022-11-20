import { LogoutRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/image/logo.ico";
import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { AuthContext } from "../../contexts/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser?.uid), {
      isOnline: false,
    });
    signOut(auth);
    navigate("/login");
  };

  const user = useContext(AuthContext);
  console.log("NavBar.jsx", user);

  return (
    <div className="grid grid-cols-3 justify-evenly align-middle border-b-4 place-items-stretch px-10">
      {/* LOGO: goto Home */}
      <div>
        <Link to="/">
          <img src={logo} alt="Feeltivity logo" />
        </Link>
      </div>

      {/* ChatPage, AboutUs */}
      <div className="grid grid-cols-3 place-items-center">
        <Link to="/chatpage">
          <div className="hover:bg-[#edfdfd] hover:text-[#40a3b6] font-[500] px-2 py-2 rounded-lg">
            ChatPage
          </div>
        </Link>
        <Link to="/aboutus">
          <div className="hover:bg-[#edfdfd] hover:text-[#40a3b6] font-[500] px-2 py-2 rounded-lg">
            AboutUs
          </div>
        </Link>
        <Link to={"/contactus"}> 
          <div className="hover:bg-[#edfdfd] hover:text-[#40a3b6] font-[500] px-2 py-2 rounded-lg">
            ContactUs
          </div>
        </Link>
      </div>

      {/* Logout */}
      <div className="grid grid-cols-1 place-items-center">
        <Link to="/login">
          <Button
            variant="outlined"
            endIcon={<LogoutRounded />}
            sx={{ borderRadius: 2 }}
            onClick={handleSignout}
          >
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
