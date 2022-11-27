import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export const ProfileCard = ({
  name = "Your name",
  subtitle = "Some one-liner about you",
  content = "Main Content",
  socialLinks = ["#", "#"] /* LinkedIn, Github */,
  profileImg = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
}) => {
  return (
    <div className="grid grid-cols-1 bg-[#202938] w-[90vw] sm:w-[60vw] md:w-[40vw] h-[430px] rounded-lg">
      {/* Some Image */}
      <div className="flex flex-wrap justify-center">
        <div className="p-5">
          <img
            src={profileImg}
            alt="..."
            className="shadow rounded-full h-[200px] w-[200px] cover align-middle border-none"
          />
        </div>
      </div>

      {/* Name, Oneliner, content, social Links */}
      <div className="mx-4">
        <div className="font-semibold my-2">
          <div className="text-[#f0f4f6]">{name}</div>
          <div className="text-[#848df1]">{subtitle}</div>
        </div>

        <div className="text-white font-medium">{content}</div>

        <div className="mb-4 mt-2 flex">
          <div className='mr-1'>
            <a href={socialLinks[0]}><LinkedInIcon sx={{ color: "#9ca2ae" }} /></a>
          </div>
          <div className='ml-1'>
            <a href={socialLinks[1]}><GitHubIcon sx={{ color: "#9ca2ae" }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
