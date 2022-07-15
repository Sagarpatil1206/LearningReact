import React, { useState } from 'react';
import MouseUE from './MouseUE';

const CleanupUE = () => {
  const [display,setDisplay] = useState(true);
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>display</button>
      {display && <MouseUE/>}
    </div>
  );
};

export default CleanupUE;