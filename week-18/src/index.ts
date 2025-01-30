import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.use(express.json());

app.post('/register', async (req, res)=>{
    const {username} = req.body;
    const {password} = req.body;

    const newUser = await client.user.create({
        data:{
            username: username,
            password: password
        }
    })

    console.log(newUser);
    res.json({message: "you are register successfully"});
})

app.listen(3000, ()=>{
    console.log("server is started");
    
})