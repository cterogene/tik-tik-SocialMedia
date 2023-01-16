import React from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
interface Iprops {
    post: Video;
}

const VideosCard: NextPage<Iprops> = ({post}) => {
  return (
    <div>VideosCard</div>
  )
}

export default VideosCard