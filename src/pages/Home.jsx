import React from 'react';
import VideoCompo from '../components/videoCompo';
import DifficultyButton from '../components/DifficultyButton';

function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <VideoCompo />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Welcome to memory flex
        </h1>
        
        <p className="text-md sm:text-lg mb-6">
           Train your brain and flex those vibes! 💯🧠🔥
        </p>

        <h3 className="text-xl sm:text-2xl mb-4">
          Pick your vibe!
        </h3>


        <DifficultyButton />
      </div>
    </div>
  );
}

export default Home;

