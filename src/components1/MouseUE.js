import React, { useEffect, useState } from 'react';

const MouseUE = () => {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mousePosition");
    setX(e.clientX);
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log("useEffect called");
    window.addEventListener("mousemove",logMousePosition); 
    //eventlistener once mount cant be remove until removeEveentListener gets called
    return () => {
      console.log("Component unmounting done");
      window.removeEventListener("mousemove",logMousePosition)
    } //so when we unmount the component then it execures the retun statement
    //we are returning from the same function
  },[]) //so useEffect will be render once as empty dependency array is there

  return (
    <div>
      <h1>Hooks X - {x} Y - {y}</h1>
    </div>
  );
};

export default MouseUE;