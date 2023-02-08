import mongoose from "mongoose"


mongoose.connect("mongodb://localhost:27017/mongo_class", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err))


// todo model
const { Schema } = mongoose


const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema)


// create todo
const todo = new Todo({
    title: "Learn Mongoose",
    description: "Learn how to use Mongoose with MongoDB",
    completed: false
})

todo.save()

Todo.find({ completed: false })
    .then(todos => console.log(todos))