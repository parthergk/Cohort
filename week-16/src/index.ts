import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection", (socket)=>{
    console.log("connection successfull");
    
    socket.send("hello");
    
    socket.on("message", (e)=>{
        console.log(e.toString());
    })
})