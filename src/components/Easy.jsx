import React, { useEffect, useState } from 'react'
import images from '../assets/images'



function Easy() {
 
    const {img,setImg} = useState([])
     
    useEffect(()=>{
      

         const dupe = images.concat(images)

           

    },[])
    

  return (
    <>
       {/* <img className='h-screen w-full' src="https://images8.alphacoders.com/138/1384043.webp" alt="rge" /> */}
      
     
    </>
  )
}

export default Easy