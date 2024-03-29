import axios from 'axios';
import React, { useEffect , useState} from 'react';

const AxiosUE = () => {
  const [post,setPost] = useState({});
  const [id,setId] = useState(1);
  const [idFromButton,setidFromButton] = useState(1);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
      console.log(res);
      setPost(res.data)
    })
    .catch(err=>{console.log(err)})
  },[idFromButton]) //only render when idFromButton updates
  return (
    <div>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <button onClick={()=>setidFromButton(id)}>button</button>
      <div>{post.title}</div>
      {/* <ul>
        {
          posts.map(post=>(
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul> */}
    </div>
  );
};

export default AxiosUE;