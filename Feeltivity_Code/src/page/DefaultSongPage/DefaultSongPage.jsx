import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SpotifyCard from "../../components/SpotifyCard/SpotifyCard";

const DefaultSongPage = () => {
  return (
    <div className="bg-[#202938] min-h-screen">
      <div>
        <Navbar />

      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="1"
            link="https://open.spotify.com/embed/track/7qOsSOpiL3R8RKyiBtIYNQ?utm_source=generator"
          />
        </div>
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="2"
            link="https://open.spotify.com/embed/track/4ClUeh8NncmDwf3fQiy58X?utm_source=generator"
          />
        </div>
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="3"
            link="https://open.spotify.com/embed/track/5iXz9HRkWDIkryIINbmYBQ?utm_source=generator"
          />
        </div>
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="4"
            link="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator"
          />
        </div>
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="5"
            link="https://open.spotify.com/embed/track/3RiPr603aXAoi4GHyXx0uy?utm_source=generator"
          />
        </div>
        <div className="m-4 w-[90vw] sm:w-[70vw] md:w-[40vw]">
          <SpotifyCard
            title="6"
            link="https://open.spotify.com/embed/track/0HqZX76SFLDz2aW8aiqi7G?utm_source=generator"
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultSongPage;
