import React from 'react'
import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
const SearchBar = () => {
  return (
    <Paper
     component="form"
     onSubmit={() => {}}
     sx={{borderRadius:20,
          border: '1px solid #e3e3e3',
          pl:2,
          boxShadow:'none',
          mr:{sm:5},
          
        }}>
        <input
            className='search-bar'
            onChange={(e)=>{val=e.target.value}}
            value=''
            placeholder='search'
            style={{background:"transparent"}}
        />

        <IconButton type='submit'
        sx={{p:"10",color:"red"}}>
            <Search/>
        </IconButton>
       
    </Paper>
  )
}

export default SearchBar
