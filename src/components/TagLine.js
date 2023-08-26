import React, { memo } from 'react';

import Typewriter from "typewriter-effect";


const TagLine = () => {

  console.log("TagLine*********************");

  return (
    <div className='  flex  justify-center items-center  text-7xl h-4/5 text-white font-semibold'>
    <Typewriter
 
    onInit={(typewriter) => {
        typewriter
            .typeString("TAG LINE FOR COOCNUT EXPORT ")
            .pauseFor(1000)
            .deleteAll()
            .typeString("FIRE FLIES ENTERPRISES")
            .start();
    }}
   />
   </div>
  )
}

const meomizedTagline=memo(TagLine);

export default meomizedTagline;