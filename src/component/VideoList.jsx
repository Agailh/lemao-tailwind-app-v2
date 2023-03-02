import React, { useState, useEffect } from "react";
import getChannelVideos from "./getChannelVideo";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = "AIzaSyA2xCBPpDKSqVs2m7TLc_RvXoY2uaOODbo";
  const channelId = "UCZLZ8Jjx_RN2CXloOmgTHVg";

  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = await getChannelVideos(channelId, apiKey);
      setVideos(videoData);
    };
    fetchVideos();
  }, [channelId, apiKey]);

  return (
    <div className="w-full h-full relative bg-gray-800">
      <h1 className="text-center text-white py-10">Newest and Upcoming Kaela's stream </h1>
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {videos.map((video) => (
          <div className="h-full flex justify-center items-center">
            <div className="border hover:bg-gray-500 rounded-md text-white p-4 cursor-pointer" key={video.id.videoId}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img className="mx-auto my-auto" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <h3 className="text-center text-sm text-semibold py-5">{video.snippet.title}</h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
