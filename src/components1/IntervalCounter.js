import React, { useEffect, useState } from 'react';

const IntervalCounter = () => {
  const [count,setCount] = useState(0);
  const tick = () => {
    setCount(prevCount => prevCount + 1);
  }
  useEffect(()=>{
    const interval = setInterval(tick,1000); //after interval of 1000ms excute the function tick
    return ()=>{
      clearInterval(interval);
    }
  },[]) //if we left here empty dependancy array then tick will execute but will only show 1
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default IntervalCounter;