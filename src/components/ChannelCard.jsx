import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoChannelUrl,
  demoChannelTitle,
  demoThumbnailUrl,
  demoProfilePicture,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
function ChannelCard({channelDetails,width}) {
console.log(channelDetails);
  // console.log(channelDetails.snippet.thumbnails.high.url)
  return (
    <Box
      sx={{
       boxShadow:'none',
       borderRadius:'20px',
       display:'flex',
       justifyContent: 'center',  
       alignItems: 'center',
       
       width,

      }}
    >
      <Link
        to={
          channelDetails?.channelDetails?.id?.channelId
            ? `/channel/${channelDetails.channelDetails?.id.channelId}`
            : demoChannelUrl
        }
      >
        <CardContent
          sx={{
            paddingTop:10,
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            paddingLeft:5   ,
            width: {sx:'100%',md: "240px"},
            
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetails?.snippet?.thumbnails?.default?.url
            }
            alt={channelDetails?.snippet?.channelTitle}
            sx={{ height: "180px", width: "180px", borderRadius: "50%", }}
          />
          <Box display="flex" mt={5}>
          <Typography
              variant="subitle1"
              sx={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
            >
              {channelDetails?.snippet?.channelTitle}
            </Typography>

            <Typography>
              <CheckCircle sx={{ color: "#fff", pl: 1 }} />
            </Typography>
            {channelDetails?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscrubers
              </Typography>
            )}
          </Box>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
