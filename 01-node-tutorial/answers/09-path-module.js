const path = require('path');

console.log(path.sep);

// To create a filePath
const filePath = path.join('/content/', 'subfolder', 'test.txt'); // It normalizes and we get the filePath as a value. 
console.log(filePath);

//To get a basename
const base = path.basename(filePath);
console.log(base);

// To provide an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // Our application is going to run in different environments. So the path to some resources, which varies across different computers, might be required for certain operations.
