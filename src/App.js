import Header from './Pages/Header';
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import OurProducts from './Pages/OurProducts';
import Footer from './Pages/Footer';

import './index.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import NotFound from './Pages/NotFound';

function App() {

  console.log(" Home Page *********************");

  const [count, setCount] = useState(1)

  useEffect(()=>{
    console.log("Initial log ***************")
  },[])

  const memoCount = useMemo(() => {
    return count;
  }, [count]);

  const onClick=useCallback(()=>{
    setCount(count+1);
  },[count])



  return (
    <div className="App m-0 p-0 w-screen overflow-y-hidden">
{/* 
      <button onClick={()=>{onClick()}}>click me</button>
      <h1>{memoCount}</h1> */}

      <Header />
      <AboutUs />
      <Features />
      <OurProducts />
      <Footer />
      {/* <NotFound/> */}
    </div>
  );
}

export default App;
