import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

function ChannelDetail() {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const { id } = useParams()
  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet&id=${id}"`)
    .then(data =>{setChannelDetail(data)})
    console.log(ChannelDetail)

  },[id])
  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail
