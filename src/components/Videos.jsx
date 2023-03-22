import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./index";
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.length !== 0 && videos !== undefined
        ? videos.map((videos) => {
            if (videos?.type === "video")
              return (
                <Box key={videos?.video?.videoId} >
                  <VideoCard video={videos} />
                </Box>
              );
          })
        : "Loading your video.."}
      <VideoCard />
    </Stack>
  );
};

export default Videos;
