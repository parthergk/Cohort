import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const socketRef = useRef();
  const [messages, setMessages] = useState<Array<string>>([]);
  const inputRef = useRef();
  console.log("render");
  
  const handleSend = ()=>{
    socketRef.current.send(inputRef.current.value);
    inputRef.current.value = '';
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    socketRef.current = ws;
    ws.onmessage = (e)=>{
      console.log("messages", messages);
      setMessages((pre)=>[...pre, e.data]);
    }
    console.log("render by useefect");
  },[]);

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" placeholder='...message'/>
        <button onClick={handleSend}>Send</button>
      </div>
      {
        messages.length>0 && messages.map((message, index)=> <span key={index}>{message}</span>)
      }
    </div>
  )
}

export default App