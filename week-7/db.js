const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String,}
})

const taskSchema = new mongoose.Schema({
    title: {type: String},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
})

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = {
    User: User,
    Task: Task
}