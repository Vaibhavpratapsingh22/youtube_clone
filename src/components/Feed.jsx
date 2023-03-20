import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, SideBar, VideoCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  console.log(selectedCategory,videos,"???????????????????????");

  useEffect(() => {
  const data =  fetchFromAPI(`${selectedCategory}`).then(mydata => setVideos(mydata.contents));
  }, [selectedCategory]);

 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 YouMedia
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflow: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "#fff",
          }}
        >
          {selectedCategory}
          <span
            style={{
              color: "#FC1503",
            }}
          >
            videos
          </span>
        </Typography>
        {videos.length!=0 ?<Videos videos={videos} />:"Loading..."}
        
      </Box>
    </Stack>
  );
};

export default Feed;
