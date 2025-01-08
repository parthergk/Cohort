const express = require("express");
const app = express();


let count = 0;

app.get('/count',(req, res)=>{
    res.json({"count":count});
})

app.use((req, res, next)=>{
    console.log('HTTP method', req.method);
    console.log('Request URL', req.headers.host);
    // console.log('Timestamp', r);
    count = count+1;
    next();
})

app.get('/add',(req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({'c':a+b});
})

app.listen(3000,()=>{
    console.log("Server is runing on port 3000");
})