import {React,useState} from 'react';


const CounterObj = () => {
  const [name,setName] = useState({firstName : " " , lastName : " "});
  return (
    <div>
      <input type="text" onChange={(e) => setName ({...name , firstName : e.target.value})}/> 
      <input type="text" onChange={(e) => setName ({...name , lastName : e.target.value})}/>
      <p>First-Name : {name.firstName}</p>
      <p>Last-Name : {name.lastName}</p>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
};

//... spread operator restores the previous state and just overwrite the next value in object only not the entire object

export default CounterObj;