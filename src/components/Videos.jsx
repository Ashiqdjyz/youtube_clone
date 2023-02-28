import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './'


function Videos({videos}) {

 
  
  return (
    <Stack gap={2} direction="row" justifyContent="start" flexWrap="wrap">
      
        {videos.map((item,index) =>(
          <Box key={index}>
           { item.id.videoId && <VideoCard video={item}/>}
           {item.id.channelId && <ChannelCard channelDetails={item}/>}

          </Box>
        ))}
      
    </Stack>
  )
}

export default Videos
