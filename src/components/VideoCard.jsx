import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";


import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";
const VideoCard = ({ video }) => {
  return <>
  {
    console.log(video,"<<<<<<<<<<<<<<<<")}
  {
  video!=='undefined'&&video!==undefined?  <Card key={video?.video?.videoId} sx={{width:{md:'320px', xs:'100%', boxShadow:'none', borderRadius:'none'}}}>
    <Link to={video?.video?.videoId ? `/video/${video?.video?.videoId}` : demoVideoUrl}>
    <CardMedia image={video?.video?.thumbnails[0]?.url || demoThumbnailUrl} alt={video?.video?.title} sx={{width:'320px', height: '240px'}}>
      </CardMedia> 
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e', height:'50px'}}>
      <Link>
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
        {video?.video?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)  }
      </Typography>
      </Link>
    </CardContent>
  </Card>:'Loading...'
  }

  </>;
};

export default VideoCard;
