const express = require("express")
const router = express.Router() 
const Tasks = require("./../models/tasks")

const Joi = require("joi")
router.get("/",(req,res)=>{

    Tasks.find()
    .then(result =>{
       res.json({tasks:result})
    })
})



router.post("/",(req,res)=>{

   
    // const taskSchema = Joi.object({
    //     name : Joi.string().min(4).max(16).required(),
    //     user_id:Joi.string().required(),
    //     subtasks :[
    //         {
    //             description : Joi.string().required(),
    //             status: Joi.string().required()
    //         }
    //     ]
    //     ,
    //     statusA : Joi.string().required()


    //  }) 




    // const validation =taskSchema.validate(req.body)
    // if (validation.error){
    //     return res.status(400).send(JSON.stringify(validation.error))
    // }
    let task = new Tasks ({
        name:req.body.name,
        user_id:req.body.user_id,
        subtasks:[{
            
            description:req.body.subtasks.description,
            status:req.body.subtasks.status
        }],
        statusA:req.body.statusA
    })
    
    task.save()
    .then(result=>res.json(result))

})


router.put("/:id",(req,res)=>{
    const id_T = req.params.id
    Tasks.findByIdAndUpdate(id_T,{statusA:req.body.statusA})
    .then(result=>{
        res.json(result)

    })
    .catch(erreur =>res.send(erreur))

  

})
 router.post("/subtasks/:id",(req,res)=>{
     const id_S = req.params.id
     Tasks.findById(req.body.id)
     .then(task=>{
         for (let index = 0; index < task.subtasks.length; index++) {
             
            if (subtask._id == id_S)
            { task.subtasks[i].status=req.body.status 
                break}
         }
        
         task.save()
             .then(result=>res.json(result))
     })




 })



module.exports=router




