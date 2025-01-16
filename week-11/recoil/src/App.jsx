// App.js
import { useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import {
  counterRecoil,
  decSelector,
  incSelector,
} from "./recoil/counterRecoil";

const App = () => {
    console.log("App");
    
  return (
    <div className="container">
      <div className="btn">
        <Increase />
        <Decrease />
      </div>
      <Counter />
    </div>
  );
};

function Increase() {
    console.log("Increase btn");
  const setCount = useSetRecoilState(counterRecoil);
  return (
    <button
      onClick={() =>
        setCount((prev) => ({
          ...prev,
          inc: prev.inc + 1,
        }))
      }
    >
      Increase
    </button>
  );
}

function Decrease() {
    console.log("Decrease btn");
    
  const setCount = useSetRecoilState(counterRecoil);
  return (
    <button
      onClick={() =>
        setCount((prev) => ({
          ...prev,
          dec: prev.dec - 1,
        }))
      }
    >
      Decrease
    </button>
  );
}

function Counter() {
    console.log("Counter");
    return (
        <div>
      <IncCounter />
      <DecCounter />
    </div>
  );
}

function IncCounter() {
    console.log("Increase");
    const incCount = useRecoilValue(incSelector);
    return <div>Increment Count: {incCount}</div>;
}

function DecCounter() {
    console.log("Decrease");
  const decCount = useRecoilValue(decSelector);
  return <div>Decrement Count: {decCount}</div>;
}

export default App;
