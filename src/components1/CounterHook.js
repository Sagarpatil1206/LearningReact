import {React,useState} from "react";

const CounterHook = () => {
  
  const [ytext,setYtext] = useState("Subscribe");
  const [count,setCount] = useState(0);

  const countFive= () => {
    for(let i=0;i<5;i++){
      // setCount(count+1);
      setCount(prevState => prevState+1)
    }
  }

  return (
    <div>
      {/* <button onClick={()=>setYtext("Thanks For Subscribing")}>{ytext}</button> */}
      <div>STATUS : {ytext}</div>

      <button onClick={()=>{setCount(count+1) ; setYtext("SUBSCRIBE")}}>Subscribe</button>
      <button onClick={()=>setCount(count+1)}>{count}</button>

      <button onClick={
        () => { setCount(count-1) ; setYtext("UNSUBSCRIBE") } //two functions in one onClick
        }>Unsubscribe</button>

      <div><button onClick={() => countFive()}>count5</button></div>
    </div>
  );
}

export default CounterHook;