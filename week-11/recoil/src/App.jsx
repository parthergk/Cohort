// App.js
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  counterRecoil,
  decSelector,
  incSelector,
} from "./recoil/counterRecoil";

const App = () => {
  console.log("App");

  return (
    <div className=" flex flex-col gap-5 dark:bg-neutral-900 bg-white dark:text-white text-neutral-900 h-screen">
      <button className=" border" onClick={()=>{
        document.querySelector("html").classList.toggle("dark");
      }}>Dark/Light</button>
      <div className=" flex gap-5">
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
      className=" border px-1"
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
      className=" border px-1"
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
