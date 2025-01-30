import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client("");
pgClient.connect();

app.post('/user', async(req, res)=>{
    const {username} = req.body;
    const {password} = req.body;

    const newUser = await pgClient.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`);

   console.log(newUser);
    res.json({message:"you are registred"});
})

app.listen(3000, () => {
    console.log("server is runing");
})
