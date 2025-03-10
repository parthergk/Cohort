const express = require("express");
const app = express();

app.get('/', (req:any, res:any)=>{
    res.send("hello")
})

app.listen(3001,()=>{
    console.log("http server is runing on port 3001");
    
})