const mongoose = require("mongoose");

// Only the properties set in your Schema will be passed unto the database.
// Everything else will be ignored. When we use schema there will be a structure in our DB.
// Model is a representation for the collection. So all the tasks to be pushed into our DB
// will be added into that collection(model).
const TaskSchema = new mongoose.Schema({
    name: String,
    completed:Boolean
});

module.exports = mongoose.model("Task", TaskSchema);