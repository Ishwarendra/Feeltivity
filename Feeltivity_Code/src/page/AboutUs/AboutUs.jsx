import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { Slide } from "react-awesome-reveal";

import aboutUsData from "./../../assets/data/aboutUsData.js";
import Adil from "./../../assets/image/Adil Vinayak.png";
import Ishwarendra from "./../../assets/image/Ishwarendra Jha.png";
import Shiraz from "./../../assets/image/Shiraz Mangat.png";
import Suvidhi from "./../../assets/image/Suvidhi.png";

const images = [Adil, Ishwarendra, Shiraz, Suvidhi];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#111828]">
      <div>
        <Navbar />
      </div>

      <div className="font-bold text-4xl text-white p-5">Meet our team</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        {aboutUsData?.map((person, key) => (
          <Slide key={key} triggerOnce direction={`${person.direction}`}>
            <div>
              <ProfileCard
                name={person.name}
                subtitle={person.subtitle}
                content={person.content}
                socialLinks={person.socialLinks}
                profileImg={images[key]}
              />
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}
