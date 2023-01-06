// Node uses CommonJS library under the hood. Every file in Node is a module.
// Modules - They are encapsulated codes where we only share(export) what we want to, that is, the minimum information required. 
// To access variables and functions from another module, use "require('path to the module location')" either assigned to a variable or simply use it directly.
// 3rd party or built in modules: require(''). Your own modules must always start with at least a: ('./') for level up.
const names = require('./04-names');  // const {john, peter} = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade'); // If we have a function inside a module that is invoked, the function would run even without declaring it. This is because when Node exports it, it wraps it with the function invoked. 
sayHi('susan');
sayHi(names.john);  // sayHi(john); 
sayHi(names.peter); // sayHi(peter); 
