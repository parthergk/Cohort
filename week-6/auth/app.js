const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Iloveswati";

app.use(express.json());

const db = [];

app.post("/sign-up", (req, res) => {
  const { username, password } = req.body;
  db.push({ username, password });
  res.json({ message: "you signup successfuly" });
});

app.post("/sign-in", (req, res) => {
  const { username, password } = req.body;

  const finduser = db.find(
    (user) => user.username === username && user.password === password
  );

  if (finduser) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ message: "You are logined successuly", token: token });
  }
});

app.use((req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, JWT_SECRET, (err, decode) => {
    if (err) {
      res.json({ message: "you are not verify" });
    } else {
      req.user = decode;
      next();
    }
  });
});

app.get("/me", (req, res) => {
  const { username } = req.user;

  const finduser = db.find((user) => user.username === username);

  res.json({ message: "hy ", finduser });
});

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
