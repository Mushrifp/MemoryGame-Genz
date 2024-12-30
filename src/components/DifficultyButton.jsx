import React from 'react'
import { Link } from 'react-router-dom'

function DifficultyButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-10 px-4">
      
      <Link to='/game/chill'>
        <button className="difficulty-btn relative text-white px-8 py-4 rounded-lg text-xl font-semibold group">
          <div className="image-wrapper relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
            <img 
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388" 
              alt="Chill Vibes" 
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Easy</span>
            </div>
          </div>
          Chill 🌴
        </button>
      </Link>

      <Link to='/game/hard'>
        <button className="difficulty-btn relative text-white px-8 py-4 rounded-lg text-xl font-semibold group">
          <div className="image-wrapper relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
            <img 
              src="https://i.pinimg.com/736x/8b/6b/98/8b6b987316a515a6c4d77684e32cccc7.jpg" 
              alt="Full Send" 
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Hard</span>
            </div>
          </div>
          Go Beast 🐯
        </button>
      </Link>

    </div>
  )
}

export default DifficultyButton
