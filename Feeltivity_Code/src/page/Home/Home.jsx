import React from "react";
import music_player_blue from "./../../assets/svg/music_player_blue.svg";

export default function Home() {
  return (
    <div className="p-3 bg-gradient-to-r from-[#fff] via-[#60cde1] to-[#fff] bg-cover">
      {/* Navbar */}
      <div className="p-5 text-center">
        Elo me Navbar
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
