import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./index";
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {console.log(videos, "<<<<<<<<<<<<<<<<")}
      {videos.length !== 0 && videos !== undefined
        ? videos.map((key) => {
            if (key.type === "video")
              return (
                <Box key={key.video.videoId}>
                  <VideoCard video={key} />
                </Box>
              );
          })
        : "Loading your video.."}
      <VideoCard />
    </Stack>
  );
};

export default Videos;
