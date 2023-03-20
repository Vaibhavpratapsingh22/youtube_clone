import React from 'react';
import { Stack,Box } from '@mui/material';
import { VideoCard } from './index';
const Videos = ({videos}) => {
console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((key)=>{
        return(
      <Box key={key.video.videoId}>
      <VideoCard video={key}/>
      </Box>)
      })}
      <VideoCard />
      </Stack>
  )
}

export default Videos