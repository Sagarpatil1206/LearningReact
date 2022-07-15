import React, { useState } from 'react';

const Form = () => {
  const [userName,setUserName] = useState(" ");
  const [comments,setComments] = useState(" ");
  const [skill,setSkill] = useState(" ");

  const submitHandler = (e) => {
    alert (`${userName}  ${comments} ${skill}`);
    e.preventDefault() ;
  }

  // onSubmit can only be use on the form tag
  // for btttons use onClick
  
  return (
    <form onSubmit={submitHandler}>  
        <div>
          <label>Username : </label>
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div>
          <label>Comments : </label>
          <textarea value={comments} onChange={(e)=>setComments(e.target.value)}></textarea>
        </div>
        <div>
          <label>Skills : </label>
          <select value={skill} onChange={(e)=>setSkill(e.target.value)} >
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
          {/* <button type="submit" onClick={submitHandler}>Submit</button> */}
        </div>
    </form>
  );
};

export default Form;