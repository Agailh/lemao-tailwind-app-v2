import React, { useState, useEffect } from "react";
import BGabt from "../assets/BKaela_HolidayGift.png";
import { FaYoutube } from "react-icons/fa";
import getChannel from "./getChannel";

const About = () => {
  const [channel, setChannel] = useState(null);
  const apiKey = "AIzaSyA2xCBPpDKSqVs2m7TLc_RvXoY2uaOODbo";
  const channelId = "UCZLZ8Jjx_RN2CXloOmgTHVg";

  useEffect(() => {
    const fetchChannel = async () => {
      const channelData = await getChannel(channelId, apiKey);
      setChannel(channelData);
    };
    fetchChannel();
  }, [channelId, apiKey]);

  if (!channel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen relative bg-gray-800">
      <img className="w-full h-full object-cover" src={BGabt} alt="/" />
      <div className="absolute w-full top-0 h-full flex flex-col justify-center text-center p-4 ">
        <div className="flex flex-col justify-between items-center max-w-[800px] mx-auto w-full border p-1 rounded-md text-white ">
          <img className="h-[200px] w-[200px] rounded-full" src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
          <h1 className="py-5">Kaela Kovalskia</h1>
          <div className="flex justify-between items-center gap-1 py-5">
            <h2>
              The <span className="line-through">Cutest</span> Coolest Blacksmith from Hololive Indonesia Gen 3
            </h2>
          </div>
          <h3 className="text-sm">{channel.snippet.description}</h3>

          <h3 className="py-5">Fan Name : Pemaloe </h3>
          <div className="flex justify-between items-center gap-2">
            <FaYoutube className="text-3xl text-[#FF0000]" />
            <h3>{channel.snippet.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
