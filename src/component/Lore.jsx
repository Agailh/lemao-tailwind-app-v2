import React from "react";
import YouTube from "react-youtube";

const Lore = ({ videoId }) => {
  const opts = {
    height: "480",
    width: "720",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  return (
    <div className="w-full h-screen relative bg-gray-800">
      <h1 className="text-white text-center pt-10">LORE VIDEO</h1>
      <div className="py-10">
        <YouTube videoId={videoId} opts={opts} className="absolute flex justify-center w-full h-full rounded-sm" />
      </div>
    </div>
  );
};

export default Lore;
