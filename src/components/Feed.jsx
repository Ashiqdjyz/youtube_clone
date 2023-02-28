import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import  SideBar  from './SideBar'
import  Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'



function Feed() {

  const [ videos,setVideos ] = useState([])
  const [ selectedCategory,setSelectedCategory ] = useState("New")
  useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: "2px" },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color:'#fff'}}>
          copyright
        </Typography>
      </Box>

      <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
        <Typography variant="h4" mb={2} sx={{color:"#fff",fontWeight:"bold"}}>
          {selectedCategory} <span style={{color:"#f31503"}}>Videos</span>
        </Typography>

      <Videos videos={videos}/>
      </Box>
    </Stack>
  );
}

export default Feed;
