import React, { memo, useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import TagLine from '../components/TagLine';
import image from '../assets/pexels-danny-torres-calderón-11351786.png'

const SCROLL_THRESHOLD=685;


const Header=()=> {


  const [theme, setTheme]=useState("light");
      
  useEffect(()=>{
    function handleScroll(){
      const position = window.scrollY;

      if (position > SCROLL_THRESHOLD && theme !== 'dark') {
        setTheme('dark');
      }
      if (position <= SCROLL_THRESHOLD && theme !== 'light') {
        setTheme('light');
      }
    }
    window.addEventListener('scroll' , handleScroll);

    return ()=>{
      window.removeEventListener('scroll' , handleScroll);
    }

  },[theme])

  return (
    <div className='h-[100vh] bg-white w-screen' style={{ backgroundImage:`url(${image})`,backgroundSize:"cover", 
    // backgroundSize: '100%',
    minHeight: '[500px]',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'noRepeat',
    
    }}>
      <Navigation theme={theme}/>
      <TagLine/>
    </div>
  )
}


const MemoizedHeader=memo(Header);


export default MemoizedHeader