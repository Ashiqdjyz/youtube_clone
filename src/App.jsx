import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar,Feed,VideoDetails,ChannelDetail,SearchFeed} from './components';

function App() {
  
  return (  
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route exact path='/'  element={<Feed/>}></Route>
        <Route path='/video/:id' element={<VideoDetails/>}></Route>
        <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
        <Route path='/search/:searchterm' element={<SearchFeed/>}></Route>
      </Routes>
    </Box>


    </BrowserRouter>
 
 
 
    )
}

export default App
