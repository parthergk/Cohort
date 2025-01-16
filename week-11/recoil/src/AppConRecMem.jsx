import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useCounter } from "../context/CounterProvider";
import "./App.css";
import { counterRecoil } from "./recoil/counterRecoil";
import { memo, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" conteiner">
      <button onClick={()=>setCount(count+1)}>Increas, {count}</button>
      <div className="btn">
        <Incress/>
        <Decress/>
      </div>
      <MemoCounter/>
    </div>
  );
}

const MemoCounter = memo(Counter);

function  Counter(){
  const context = useCounter();
  const counter = useRecoilValue(counterRecoil);
  console.log("coun");
  return(
    <div>{counter}</div>
  )
}

function Incress(){
  const context = useCounter();
  const setCounter = useSetRecoilState(counterRecoil);
  console.log("inc");
  return (
    <button onClick={() => setCounter(c=> c+1) }> {/*context.setCount(context.count+1)*/}
          Incress
        </button>
  )
}

function Decress(){
  const context = useCounter();
  const setCount = useSetRecoilState(counterRecoil);
  console.log("dec");
  
  return (
    <button onClick={() => setCount(c=> c-1)}>
          Decress
        </button>
  )
}

export default App;
