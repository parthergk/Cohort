import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();


  function handleSend(){
    if (!socket) {
      return
    }
    socket.send("hello")
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e)=>{
      console.log(e.data);
    }
  },[]);

  return (
    <div>
      <input type="text"  placeholder='Enter message....'/>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default App
