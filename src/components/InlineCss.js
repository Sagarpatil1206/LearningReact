import React from 'react';

const styler = {
  fontSize : '72px' ,
  color : "red" 
}

const InlineCss = () => {
  return (
    <div>
      <h1 style={styler}>Ok</h1>
    </div>
  );
};

export default InlineCss;