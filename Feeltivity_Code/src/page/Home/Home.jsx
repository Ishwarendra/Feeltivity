import React, { useContext, useEffect, useState } from "react";
import music_player_blue from "./../../assets/svg/music_player_blue.svg";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const navigate = useNavigate();
  // const user = useContext(AuthContext);
  const [user, setUser] = useState(useContext(AuthContext));

  useEffect(() => {
    console.log(user, "user-change");
    if (!user.user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
          <div className="text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            praesentium, non enim laborum harum fuga ad.
          </div>
        </div>

        <div className="flex-1 bg-no-repeat bg-center bg-auto">
          <img
            src={music_player_blue}
            alt="woman and music player"
            className="bg-cover max-h-[90%]"
          />
        </div>
      </div>

      {/* Footer */}
      <div>Elo, me footer.</div>
    </div>
  );
}
