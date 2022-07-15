import React from 'react';

const Person = ({person}) => {
  return (
    <div>
      <h1>My name is {person.name} and my skill is {person.skill}</h1>
      {/* <h1>My name is {props.person.name} and my skill is {props.person.skill}</h1> */}
    </div>
  );
};

export default Person;