const express=  require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
app.use(express.static("./client/build"))
mongoose.set('strictQuery', true)
const Modal = require("./Modal")
const { randomUUID } = require("crypto")

app.get("/data",async (req,res)=>{
    const data = await Modal.find()
    res.json(data)
})


app.get("/dataa" , async(req,res)=>{
    const data = new Modal({name:"new name",roll:randomUUID()})
    const savedUser = await data.save()
    res.json(await Modal.find())
})

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})

const PORT = process.env.PORT || 5000

mongoose.connect("mongodb+srv://question:question@question.nzaigyy.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
})

app.listen(PORT,()=>{
    console.log("server listing on final build",PORT);
})