import React from "react";
import music_player_blue from "./../../assets/svg/music_player_blue.svg";
import Navbar from "../../components/Navbar/Navbar";
import SmallCard from "../../components/SmallCard/SmallCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import level0DFD from "./../../assets/svg/level0_DFD.svg";

export default function Home() {
  return (
    <div className="bg-[#5f9df7]">
      {/* Navbar */}
      <div className="text-center">
        <Navbar />
      </div>

      {/* Some Content (with button) | SVG */}
      {/* Some Button and more text */}
      <div className="p-5">
        {/* <Slide triggerOnce> */}
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl flex text-center max-h-[70vh]">
          <div className="flex-1 align-center m-auto">
            <div className="text-[50px] uppercase">Feeltivity</div>
              <div className="text-lg font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam praesentium, non enim laborum harum fuga ad.
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
        {/* </Slide> */}
        {/* 3 points about feeltivity */}
        <div className="grid">
          <div className="text-5xl uppercase text-center mt-10 mb-12 underline underline-offset-8">
            some good heading
          </div>
          <div className="grid grid-cols-1 mx-[40px] sm:mx-[0] md:grid-cols-3 gap-10">
            {/* Fix bgColor Issue */}
            <div>
              <SmallCard
                muiIcon={"✅"}
                heading="Point-1"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente magni laborum."
                bgColorClass="bg-gradient-to-l from-[#6768ff] via-[#6768ff] to-[#94a9fc]"
                textColorClass="text-white"
              />
            </div>

            <div>
              <SmallCard
                muiIcon={"✅"}
                heading="Point-2"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            repudiandae! Maxime exercitationem.."
                bgColorClass="bg-[#6768ff]"
                textColorClass="text-white"
              />
            </div>

            <div>
              <SmallCard
                muiIcon={"✅"}
                heading="Point-3"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            repudiandae! Maxime exercitationem, vel laudantium ut molestias ab
            officiis repellendus."
                bgColorClass="bg-gradient-to-l from-[#94a9fc] via-[#6768ff] to-[#6768ff]"
                textColorClass="text-white"
              />
            </div>
          </div>
        </div>

        {/* Maybe add links to different diagrams and SRS */}
        <div className="flex flex-col my-10 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl">
          <div className="uppercase text-center text-[50px] underline underline-offset-8 mb-4">
            More About Project
          </div>
          <div className="flex flex-col justify-center align-middle">
            <div className="self-center">
              <img
                src={level0DFD}
                alt="Data Flow Diagram"
                className="h-[60vh] w-[80vw]"
              />
            </div>

            <div className="uppercase text-lg self-center font-semibold my-3 underline">
              Figure-1: Level-0 Data Flow Diagram
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#1e40af] p-3 text-center text-white font-semibold">
        &#169; Copyright maybe :) &#8482;
        <Link to="https://github.com/Ishwarendra/Feeltivity">
          <GitHubIcon sx={{ mx: 3 }} />
        </Link>
      </div>
    </div>
  );
}
