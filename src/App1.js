import { useState } from 'react'
import './App.css'
import ConditionalRend from './components/ConditionalRend'
import MapFunc from './components/MapFunc'
import Stylesheet from './components/Stylesheet'
import InlineCss from './components/InlineCss'
import styles from "./appStyles.module.css"
import Form from './components/Form'

function App1(){
  // const [status,setStatus] = useState(false);
  return (
    <div className="App">
      {/* <ConditionalRend/> */}
      {/* <MapFunc/> */}
      {/* <Stylesheet primary={true}/>  */}
      {/* false is a propery not a string so no  */}
      {/* <button onClick={()=>setStatus(!status)}>Change Color</button> */}
      {/* <InlineCss/> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      
      <Form/>
    </div>
  )
}

export default App1;