import React from 'react'
import video from "../assets/videoplayback.mp4";

function VideoCompo() {
  return (
    <>
     <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  )
}

export default VideoCompo