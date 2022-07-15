import React , {useState} from 'react';

const CounterArr = () => {
  const [items,setItems] = useState([]);

  const itemsAdder = () => {
    setItems([...items , {key : items.length , value : Math.floor(Math.random()*10) + 1}])
  }

  // var numbers=[2,8,6,4,1,3];
  // const doubleNum = numbers.map(number => {
  //   return (number * 2);
  // })

  // console.log(doubleNum);

  return (
    <div>
      <button onClick={itemsAdder}>Click Me</button>
      <ul>
        {items.map (item => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterArr;