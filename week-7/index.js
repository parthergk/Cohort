const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { User, Task } = require("./db");

app.use(express.json());

const JWT_SECRET = "iloveswati"

app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        name:name,
        email:email,
        password: hashPassword
    })

    res.json({message:`${newUser.name} wellcome`});
});

app.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    const findUser = await User.findOne({email:email});
    console.log("user",findUser);
    
    if (findUser) {
        const hashPassword = await bcrypt.compare(password, findUser.password);
        if (hashPassword) {
            const token = jwt.sign({
                userId:findUser._id.toString()
            }, JWT_SECRET);
            res.json({token:token});
        }else{
            res.json({message:'wrong password'});
        }
    }else{
        res.json({message: 'wrong username or password'});
    }
});

app.use((req, res, next)=>{
    const token = req.headers.token;
    const verifyToken = jwt.verify(token, JWT_SECRET);

    if (verifyToken) {
        req.userId = verifyToken.userId;
        next();
    }else{
        res.json({message:'wrong creadentials'})
    }
})

app.post("/task", async(req, res) => {
    const userId = req.userId;
    const {title} = req.body;

    const newTask = await Task.create({
        title: title,
        userId: userId
    });
    res.json({message: 'task added successuly',newTask})
});

app.get("/tasks", async (req, res) => {
    const userId = req.userId;
    
    const allTask = await Task.find({
        userId: new mongoose.Types.ObjectId(userId) // Convert userId string to ObjectId
    });
    res.json({message: 'all task here',allTask});
});

 async function main() {
    try {
        await mongoose.connect("mongodb+srv://gaurav_pg:gauravkumar@cluster0.b7b7nvq.mongodb.net/todo");
          console.log("data base connected");
          app.listen(3000, () => {
            console.log(`Server is runnging on http://localhost:3000`);
          });   
        
    } catch (error) {
        console.log(error); 
    }
}

main();
