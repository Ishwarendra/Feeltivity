import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#111828]">
      <div>
        <Navbar />
      </div>

      <div className="font-bold text-4xl text-white p-5">Meet our team</div>

      <div className="grid grid-cols-2 place-items-center">
        <div className="w-auto h-auto m-5">
          <ProfileCard
            name="Dummy Name"
            subtitle="Dummy Subtitle"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ducimus expedita quibusdam vero obcaecati dolorem?"
            socialLinks={["#", "#"]}
          />
          </div>

          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
      </div>
    </div>
  );
}
