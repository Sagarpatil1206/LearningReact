import './App.css';
import Greet from './components1/Greet';
import CounterHook from './components1/CounterHook';
import CounterObj from './components1/CounterObj';
import CounterArr from './components1/CounterArr';
import UseEffectCount from './components1/UseEffectCount';
import MouseUE from './components1/MouseUE';
import CleanupUE from './components1/CleanupUE';
import IntervalCounter from './components1/IntervalCounter';
import AxiosUE from './components1/AxiosUE';

function App() {
  
  return (
    <div className="App">
      {/* <Greet name="Sagar" nickname="aba">This is a children props</Greet>
      <Greet name="Rohit" nickname="dada"><button>Children Prop</button></Greet>
      <Greet name="Pranjal" nickname="nana"/> */}

      {/* <CounterHook></CounterHook> */}

      {/* <CounterObj></CounterObj> */}

      {/* <CounterArr></CounterArr>
      <UseEffectCount></UseEffectCount> */}

      {/* <MouseUE/> */}

      {/* <CleanupUE/> */}

      {/* <IntervalCounter/> */}

      <AxiosUE/>
    </div>
  );
}

export default App;
