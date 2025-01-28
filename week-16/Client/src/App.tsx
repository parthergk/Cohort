import { useEffect, useRef, useState } from "react";

function App() {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!socketRef.current || !inputRef.current) {
      return;
    }
    socketRef.current.send(
      JSON.stringify({
        type: "chat",
        payload: {
          chat: inputRef.current.value,
        },
      })
    );
    inputRef.current.value = "";
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    socketRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };

    ws.onmessage = (e) => {
      try {        
        setMessages((prev) => [...prev, e.data]);
      } catch (err) {
        console.log("Invalid message format:", err);
      }
    };

    ws.onerror = (error) => {
      console.error("error:", error);
    };

    ws.onclose = (event) => {
      console.log("closed:", event.code);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.length > 0 &&
          messages.map((message, index) => (
            <div
              key={index}
              className="bg-white p-3 shadow-lg mb-2 max-w-[80%]"
            >
              <span className="text-gray-800">{message}</span>
            </div>
          ))}
      </div>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-gray-700 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
