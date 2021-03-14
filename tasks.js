const mongoose= require("mongoose")

// const subtask = mongoose.Schema({
//     description:{type:String},
//     status:{type:String }
// })

const taskSchema =  mongoose.Schema({
      
    name : {type:String,required:true},
  user_id : {type:String,required:true},
  subtasks : [
    //   {
    //       description :{type:String,required:true},
    //       status :{type:String,required:true}

    //   }
    ]
    
  ,
  statusA : { type : String , required: true}
     

})
const task = mongoose.model('tasks',taskSchema)
module.exports = task