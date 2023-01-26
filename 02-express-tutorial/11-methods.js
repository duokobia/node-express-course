// You cant just simply perform a post request. You either need to use:
// A tool, Ex: postman, or set up a basic working (frontend) application 
// to test your post method functionality.
const express = require("express");
const app = express();
let { people } = require("./data");

// app.use() applies the middleware to all our routes.

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse.json
app.use(express.json());

app.get("/api/people", (req, res) => {
    res
    .status(200)
    .json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
    const { name } = req.body; // The name here is the key while the input value is the actual value.
    if(!name){
        return res
        .status(400)
        .json({ success: false, msg: "Please provide name value" })
    }
    res.status(201).json({ success: true, person: name})
});

app.post("/api/postman/people", (req, res) => {
    const { name } = req.body;
    if(!name){
        return res
        .status(400)
        .json({ success:false, msg: "Please provide name value" })
    }
    res.status(201).send({ success: true, data: [...people, name] })

});

app.post("/login", (req, res) => {
    const { name } = req.body;
    if(name){
        return res
        .status(200)
        .send(`Welcome ${name}`);
    }
   res.status(401).send("Please Provide Credentials");
});

//  Two values required to perform this http method:
app.put("/api/people/:id", (req, res) => {
    const { id } = req.params  //  We access the specific item to be updated using the params(:id),
    const { name } = req.body  //  then we modify this item using the value sent in the body. 
    
    const person = people.find((person) => person.id === Number(id));
    
    if(!person){
        return res
        .status(404)
        .json({ success:false, msg: `no person with id ${id}` })
    }
    // If the "id" matches the "id" in the params, then change the name of the person available in the body with the new name value.
    const newPeople = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({ success:true, data: newPeople });
});

//  When we are deleting, we are not expecting to send any payload, so the body will be empty.
//  We want to confirm the item to be deleted exists first, that is, there is a person whose 
//  "id" matches the "id" queried exists in the list, then we then proceed to delete the person from the list.
app.delete("/api/people/:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person){
        return res
        .status(404)
        .json({ success:false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id) )
    return res.status(200).json({ success: true, data: newPeople })
});

// If your FE app is hosted on a separate server, then you are going to provide the full path where the application is hosted to postman when testing endpoints.
 
app.listen(5000, () => {
    console.log("Server is listening at port: 5000...")
});