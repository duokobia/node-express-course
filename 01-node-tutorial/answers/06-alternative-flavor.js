module.exports.items = ['item1', 'item2']; // Array setup and export in one line. We are setting up a property on the "exports" object to equal the array.
// const items = ['item1', 'item2'];  is an alternative way to declare this array. Then do "module.exports.items".
const person = {
    name: 'bob',
}  // Object setup

module.exports.singlePerson = person // We are setting up a property: "singlePerson" to equal "person" which has already been declared.