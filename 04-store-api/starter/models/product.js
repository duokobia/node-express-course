const mongoose = require("mongoose");

//This is where we set up the properties for the JSON as well as the validations. 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required:[true, "product name must be provided"]
        // required: "product name must be provided"
    },
    price: {
        type: Number,
        // required:[true, "product price must be provided"]
        // required: "product price must be provided"
    },
    featured: {
        type: Boolean,
        default: false, // By default, the products wont be featured
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            messages:"{VALUE} is not supported"
        },
    }
});


module.exports = mongoose.model("product", productSchema);


//  2 ways to populate your database:

// 1. Manually adding the data in the post route.

// 2. Automate the process by passing yourlist unto the database.