const express = require("express");
const { products } = require("./data")

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Home page</h1><a href='/api/products/1'>products</a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });

    res.json(newProducts);
});

// //We can use "route" parameters here instead of hard coding this param
// app.get("/api/products/1", (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);

//     res.json(singleProduct)
// });

// Using "route" parameters:
app.get("/api/products/:productID", (req, res) => {
    // console.log(req);
    // console.log(req.params);
    // "productID" is set up as number in the JSON but we have to convert it
    // to string to use it in the route parameter here. Hence, Number(productID).
    // With this, users can use request and route parameters to access data.
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID)
    );

    //If the query params doesn't exist in the resource on the url queried, then do this:
    if(!singleProduct) {
        return res.status(404).send("Product Does Not Exist")
    }

    console.log(singleProduct);
    res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send("hello world");
});

//  The "query string" parameters are also called the "url" parameters.
//  This is a way for the client to send small amount of information 
//  back to query the server using the "url".

//  Whatever comes after the "?" is not technically part of the url. 
app.get("/api/v1/query", (req, res) => {
    //  In order to access those query parameters, use "req.query".
    //  So in the browser, type in "http://localhost:5000/api/v1/query?name=daniel&id=1". 
    //  Or using the "search" and the "limit" parameters, type in "http://localhost:5000/api/v1/query?search=a&limit=2",
    //  to seacrh for names with "a", and a max (limit) of 2 items should be returned.
    //  The server will respond with the hard coded string: "hello world". 
    // console.log(req.query);
    

    // To setup the query functionality:
    // First create a new instance(copy) of those products(sortedProducts) using the spread operator.
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            //  We will get errors in the server console if we don't explicitly include "return" 
            //  in our "if" statements, except it is the last statement in the "if" block. 
            //  This is because JS will try to send two responses for the same request. 
            //  It doesnt termnate the previous statement if "return" isn't used. 
            //  Hence, JS try to send both the current response and the next response at the same time.
            //  Meanwhile, in JS, you can only have one response per request. 
            return product.name.startsWith(search); 
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1){
        // Two options you can use to send the response:
        // res.status(200).send("no products matched your search");
        // This approach is more common than the commented approach above.
        return res.status(200).json({success: true, data: []},);
    }
    // Since this is the last line in the if "if" Block, you won't get any 
    // error if you omit the "return": res.status(200).json(sortedProducts);. 
    // But it is good practice to put the "return" though.
    return res.status(200).json(sortedProducts);
});

// In real case scenerio, you won't setup a separate url just for the query. 
// You can just add it to where you are getting a request, and setup conditions
// for the query parameters.

app.listen(5000, () => {
    console.log("server is listening on port: 5000...");
});