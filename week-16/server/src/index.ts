import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});
interface User {
    socket: WebSocket;
    room: string
}
const allSocket:User[] = []

wss.on("connection", (socket)=>{
    console.log("Connected");
    
    wss.on("error", (err)=>{console.log(err)});

    socket.on("message", (msg)=>{

        //@ts-ignore
        const JsonMsg = JSON.parse(msg);

        if (JsonMsg.type === "join") {
            allSocket.push({
                socket,
                room: JsonMsg.payload.roomId
            })
        }

        if (JsonMsg.type === "chat") {
            let currentRoom = null;
            //@ts-ignore
            currentRoom = allSocket.find((x)=>x.socket===socket).room;

            allSocket.forEach((x)=>{
                if(x.room===currentRoom){
                    x.socket.send(JsonMsg.payload.chat);
                }
            })
        }
        
    })

})