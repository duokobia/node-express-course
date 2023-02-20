const mongoose = require("mongoose");

// Only the properties set in your Schema will be passed unto the database.
// Everything else will be ignored. When we use schema there will be a structure in our DB.
// Model is a representation for the collection. So all the tasks to be pushed into our DB
// will be added into that collection(model).
const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        // required:true  // use this if you dont want to return a custom message.
        require: [true, "must provide name"],
        // We can also trim something like this: "name":"   john  " to "name":"john" because
        // this is exactly how it will save it in our DB.
        trim:true, 
        maxlength:[20, "name cannot be more than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false, // This means the default task will not be marked as completed.
    },
});

module.exports = mongoose.model("Task", TaskSchema);

// built-in valiadators