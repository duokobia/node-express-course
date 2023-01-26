const express = require("express");
const router = express.Router();

// Destructuring the objects during import:
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require("../controllers/people");

// There are two ways of setting up the routes with exactly the same functionality: 

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// Or:

// Since the get and post method base url matches, they are chained referencing the base url:
router.route("/").get(getPeople).post(createPerson);

//This route stands alone since it does not share base url with any other route:
router.route("/postman").post(createPersonPostman);

// Since the put and delete method base url matches, they are chained referencing the base url:
router.route("/:id").put(updatePerson).delete(deletePerson);



module.exports = router;