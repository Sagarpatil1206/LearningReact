import React from 'react';
import './Stylesheet.css'

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : " "
  return (
    <div>
      <h1 className={`${className} fontSize`}>Stylesheet</h1>
    </div>
  );
};

export default Stylesheet;