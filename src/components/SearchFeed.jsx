import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`${searchTerm}`).then((mydata) =>
      setVideos(mydata.contents)
    );
  }, [searchTerm]);

  return (
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
        Search results for - 
        <span
          style={{
            color: "#FC1503",
            marginLeft: 10,
          }}
        >
          {searchTerm}
        </span>
      </Typography>
      {videos.length !== 0 ? <Videos videos={videos} /> : "Loading..."}
    </Box>
  );
};

export default SearchFeed;
