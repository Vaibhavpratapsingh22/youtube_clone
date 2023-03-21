import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import  {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { ClassNames } from '@emotion/react';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`${id}`,'video/streaming-data/').then((data)=>console.log(data))
  })
  return (
   <Box minHeight='95vh'>
    <Stack direction={{xs:'column', md:'row'}}>
      <Box sx={{width:'100%',position:'sticky', top:'86px'}}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} ClassName="react-player" controls></ReactPlayer>
      </Box>

    </Stack>

   </Box>
  )
}

export default VideoDetail