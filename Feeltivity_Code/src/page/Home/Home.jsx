import React, { useContext ,useEffect} from "react";
import music_player_blue from "./../../assets/svg/music_player_blue.svg";
import { auth } from "../../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const navigate=useNavigate();
  const user=useContext(AuthContext)
  // auth().onAuthStateChanged(function(user) {
  //   try {
  //   if (user) {
  //     console.log("user is signed in");
  //   } else {
  //       navigate('/register')
  //   } } catch {
  //     console.log("error");
  //   }
  // });
  useEffect(()=>{
    if(!user){
        navigate('/login');
    }
    else console.log(user);
},[user])

  return (
    <div>
      {/* Navbar */}
      <div className="text-center">
          <Navbar />
      </div>

      {/* Some Content (with button) | SVG */}
      {/* Some Button and more text */}
      <div className="flex text-center max-h-[70vh]">

        <div className="flex-1 align-center m-auto">
          <div className="text-[50px] uppercase">Feeltivity</div>
          <div className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam praesentium, non enim laborum harum fuga ad.</div>
        </div>

        <div className="flex-1 bg-no-repeat bg-center bg-auto">
          <img src={music_player_blue} alt="woman and music player" className="bg-cover max-h-[90%]" />
        </div>
        
      </div>

      {/* Footer */}
      <div>
        Elo, me footer.
      </div>
    </div>
  );
}
