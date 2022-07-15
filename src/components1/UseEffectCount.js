import React, {useState,useEffect} from "react";

const UseEffectCount = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title = `Clicked ${count} times`;
  },[count])//title changes when count changes //dependency array
  //here we are creating a side effect in which change in count in this component changes page's title
  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
    </div>
  )
}

export default UseEffectCount;