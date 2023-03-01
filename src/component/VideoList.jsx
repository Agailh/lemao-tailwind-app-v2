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
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h2>{video.snippet.title}</h2>
          </a>
          <p>{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
