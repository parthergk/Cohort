import { useCounter } from "../context/CounterProvider";
import "./App.css";

function App() {
  
  return (
    <div className=" conteiner">
      <div className="btn">
        <Incress/>
        <Decress/>
      </div>
      <Counter/>
    </div>
  );
}

function Counter(){
  const context = useCounter();
  return(
    <div>{context.count}</div>
  )
}

function Incress(){
  const context = useCounter();
  return (
    <button onClick={() => context.setCount(context.count + 1)}>
          Incress
        </button>
  )
}

function Decress(){
  const context = useCounter();
  return (
    <button onClick={() => context.setCount(context.count - 1)}>
          Decress
        </button>
  )
}

export default App;
