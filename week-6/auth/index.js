const express = require("express");
const app = express();

app.use(express.json());

function getToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 40; i++) {
    token += characters.charAt(Math.floor(Math.random() * 40));
  }
  return token;
}

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
    const authtoken = getToken();
    finduser.token = authtoken;
    res.json({ token: authtoken });
  } else {
    res.status(403).json({message: "Invalid username or password"})
  }
});

app.get('/me',(req, res)=>{
    const token = req.headers.token;

    const findUser = user.find(user=> user.token == token);

    if (findUser) {
        res.json({username: findUser.name, password: findUser.password})
    }else{
        res.json({message: "token is not valid"})
    }
})

app.listen(3000, () => {
  console.log("server is runing on the 3000 port");
});
