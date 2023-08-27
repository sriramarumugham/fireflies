import React, { memo } from 'react';


const Navigation = ({theme}) => {

  console.log("Navigation*********************" ,theme);
  
  return (
    <div className={`flex w-[100%] items-center justify-between p-7     z-50  h-9 text-xl  font-semibold fixed ${theme =="light" ? "text-white": "text-black bg-white"} `}>
      <div className='	flex  '>LOGO</div>
      <div className=' flex	 gap-4 '>
       <div><h4>HOME</h4></div>
       <div><h4>ABOUT US</h4></div>
       <div><h4>PRODUCTS</h4></div>
       <div><h4>CONTACT US</h4></div>

      </div>
    </div>
  )
}

const meomizedNavigation=memo(Navigation)

export default Navigation