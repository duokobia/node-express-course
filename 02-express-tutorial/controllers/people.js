// Looking at the people.js(from routes/people.js) module, we have a lot of functionalities
// and things are looking messy. So to achieve a better set up, we split the functionality
// up into separate files using a Model-View-Controller(MVC) architecture or pattern.

let { people } = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
    const { name } = req.body; // The name here is the key while the input value is the actual value.
    if(!name){
        return res.status(400).json({ success: false, msg: "Please provide name value" })
    }
    res.status(201).json({ success: true, person: name})
};

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if(!name){
        return res
        .status(400)
        .json({ success:false, msg: "Please provide name value" })
    }
    res.status(201).send({ success: true, data: [...people, name] })
};

const updatePerson = (req, res) => {
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
};

// Is the "id" queried available? if yes, then get an array containing only the person using the query "id" by filtering out other persons.
// Else return a 404 status code response. 
const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person){
        return res
        .status(404)
        .json({ success:false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id) )
    return res.status(200).json({ success: true, data: newPeople })
};

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
};


