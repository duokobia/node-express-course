// This is where we dynamically add all the values in our list(products.json) to the database by invoking the populate.js module.

require("dotenv").config();

const connectDB = require("./db/connect"); // A second connection to the DB is required.
const Product = require("./models/product"); // The model is used to automatically add the products

const jsonProducts = require("./products.json"); // Grab the list to be dynamically passed unto the DB

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany(); // This clears all previous data
        await Product.create(jsonProducts); // This creates products by using the jsonProducts module.
        console.log("Success!!!");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();