import React, { useState } from 'react';

const ConditionalRend = () => {
  const [loggedIn,setLoggedIn] = useState(false);

  const toggle = () => {
    setLoggedIn(!loggedIn);
  }

  // if(loggedIn){
  // return (
  //   <div>
  //     <div>Welcome to our website Sagar</div>
  //     <button onClick={toggle}>Log Out</button>
  //   </div>
  // );
  // }else{
  //   return(
  //   <div>
  //     <div>Welcome guest</div>
  //     <button onClick={toggle}>Log In</button>
  //   </div>
  //   );
  // }

//   let message;
//   if(loggedIn){
//     message = <div>logged in now ...</div>  //jsx elements are just wrappers for function calls
//   }else{
//     message = <h1>logged out now</h1>
//   }
     /* let message = document.createElement('div');
     message.innerHTML = "hello"; */
//   return (
//     <div>
//       {message}
//     </div>
//   )

  //  return (
  //   loggedIn ? <div>Logged In</div> : <h1>Logged Out</h1>
  //  )

  return(
    loggedIn && <div>Logged In</div> //render one thing or nothing (short circuit operator)
  )

};

export default ConditionalRend;