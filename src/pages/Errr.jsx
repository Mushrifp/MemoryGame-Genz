import React from 'react';
import video from "../assets/giphy.mp4";
import { Link } from 'react-router-dom';

function Errr() {
  return (
    <div className="relative w-full h-screen">
        <h1 className='absolute  top-5 left-1/2 transform -translate-x-1/2 text-black text-xl'>404</h1>
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 w-[50%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src={video} type="video/mp4" />
      </video>

      <Link to='/' className="absolute  top-[80%] left-1/2 transform -translate-x-1/2 text-black text-xl">
        Go Home
      </Link>
    </div>
  );
}

export default Errr;
