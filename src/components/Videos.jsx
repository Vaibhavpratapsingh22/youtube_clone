import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";
const Videos = ({ videos }) => {
  return (
    <>
      {videos.map((item, index) => {
        console.log(item.video);
        let videoId = item.video;
        <VideoCard videoId={videoId} />;
      })}
    </>
  );
};

export default Videos;
