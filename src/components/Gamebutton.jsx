import React from 'react';
import { Link } from 'react-router-dom';

function Gamebutton({ onClick }) {  
  return (
    <>
      <div className="flex justify-center items-center space-x-5 mt-8">
  <button
    onClick={onClick}
    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
  >
    Try Again
  </button>
  
  <Link to="/">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded">
      Home
    </button>
  </Link>
</div>

    </>
  );
}

export default Gamebutton;
