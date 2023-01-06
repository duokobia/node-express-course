//os module is a built-in module for interacting with the operating system as well as the server.
const os = require('os'); //General set up for access to all the properties this module provides.
// const {xxx} = require('os'); // For specific methods or properties, destructure here.

// Info about current user
const user = os.userInfo() // os is the name of my variable. Invoke the method here.
console.log(user); // To get info about current user.

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`); // You dont have to declare the built-in method before using it.

const currentOS = {
 name: os.type(),
 release:  os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
};
console.log(currentOS);