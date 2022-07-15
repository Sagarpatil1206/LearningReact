import React from 'react';
import Person from './Person';

const MapFunc = () => {
  const arr = ['sagar','pranjal','rohit']
  const persons = [
    {
      name :'sagar',
      id:1,
      skill:'reactJS'
    },
    {
      name :'pranajl',
      id:2,
      skill:'veu'
    },
    {
      name :'rohit',
      id:3,
      skill:'angular'
    }
  ]
  return (
    <div>
      {
        arr.map((ar,index)=>(
          <h1 key={index}>{index} : {ar}</h1>
        ))
      }
      {
        persons.map(person=>(
          <h1 key={person.id}>{person.skill}</h1>
        ))
      }
      {
        persons.map(person=>(
          // <Person name={person.name} skill={person.skill} key={person.id}/>
          <Person person={person}/> //passed the entire object
        ))
      }
    </div>
  );
};

export default MapFunc;