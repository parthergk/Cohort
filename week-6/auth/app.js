const express = require("express");
const app = express();
const jsonwebtoke = require("jsonwebtoken");

app.use(express.json());

const JWT_SCR = "iloveswati";

const user = [];

app.post("/sign-up", (req, res) => {
  const { username, password } = req.body;
  user.push({ name: username, password: password });
  console.log(user);
  res.send({ message: "You have signed up" });
});

app.post("/sign-in", (req, res) => {
  const { username, password } = req.body;
  const finduser = user.find(user => user.name === username && user.password === password);

  if (finduser) {
    const token = jsonwebtoke.sign(
      {
        name: username,
      },JWT_SCR);

    console.log("json token", token);
    res.json({ token: token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.use((req, res, next)=>{
    const token = req.headers.token;
    if (token) {
        next();
    }else{
        res.json({message:"You are not login"})
    }
    
});

app.get("/me", (req, res) => { 
    console.log("Request for me");
    
    const token = req.headers.token;
    const username = jsonwebtoke.verify(token, JWT_SCR);
    
    const findUser = user.find((user) => user.name === username.name);
    
    if (findUser) {
        res.json({ username: findUser.name, password: findUser.password });
    } else {
        res.json({ message: "token is not valid" });
    }
});

app.listen(3000, () => {
  console.log("server is runing on the 3000 port");
});
