const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });

        // Other response options could be:
        // res.status(200).json({ tasks, amount:tasks.length })
        // res.status(200).json({ success:true, data:{tasks, amount:tasks.length }})
        // res.status(200).json({ status: "success", data:{tasks, nbHits:tasks.length }})
   
    // res.send("get all tasks")
    // The name of the model is Task and the static function name is find: "await Task.find({})".
    // To get all the documents in the collection, use an empty object inside the find().
});

const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body);
        res.status(201).json({ task }); 
});

const getTask = asyncWrapper(async (req, res, next) => {
        const{id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).json({ task });
});


const deleteTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).json({task});
        // Other types of responses that still work include:
        // res.status(200).send();
        // res.status(200).json({ task:null, status:"success" });
});

const updateTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
            new:true,
            runValidators:true,
        });
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).json({ task });
        // res.status(200).json({ id:taskID, data: req.body })
});

const editTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;
        
        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
            new:true,
            runValidators:true,
            overwrite:true,  // This overwrites all other properties that weren't updated.
        });
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404));
        }
        res.status(200).json({ task });
        // res.status(200).json({ id:taskID, data: req.body })
});

// With patch() method, only the properties passed in is updated. The rest of the document stays the same.
// With put() method, we replace the entire existing document with the new properties passed in.

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
};