import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Hidden, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl, demoVideoTitle, demoChannelUrl,} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {

  
  return (
    <Card sx={{overflowY:'none',width:{ md: 300,sx:"100%"}}}>
      <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 1/1, height: 180 }}
        />
      </Link>

      
        <CardContent sx={{  backgroundColor: "#1e1e1e",height:100, width:{ md: 'auto', xs:'100%'}, overflow:'hidden'}}>
        <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff"  >
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle }
              <CheckCircle p={5} sx={{mt:1,pl:1, color:"gray", fontSize:12}}/>
            </Typography>
        </Link>
        </CardContent>
         
      
    </Card>
  );
}

export default VideoCard;
          
