const {string } = require("joi")
const mongoose = require("mongoose")
const express = require ("express")
const Joi = require ("joi")
const tasks=require("./routes/task")
const app = express()



uri= "mongodb+srv://ashdb:1234@cluster0.bflhd.mongodb.net/chall?retryWrites=true&w=majority"
const port = 5000 || process.env.PORT

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
 
}).catch((err)=>{
    console.log("error while connecting to db..")
})
mongoose.connection.on("connected",()=>
console.log("we're connected")) 

mongoose.connection.on("error",(e)=>
console.log(e))

app.use(express.json())

app.use("/task",tasks)













app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})








