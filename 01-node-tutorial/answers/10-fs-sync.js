// Two paths to file system: Asynchronously - non-blocking or Synchronously - blocking.

//This is the Sync - blocking path
const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs'); // Destructured
console.log('start');

// const fs = require('fs');   // Not destructured way of accessing the same method out of the fs module.
// fs.readFileSync

//Two methods to read files and create files from scratch

//To read files
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//To create files
//If file is not available, Node will create one. If available, Node will overide its content with this new one.
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'} //Node will append this if set to 'a'.
)
console.log('done with the this task');
console.log('starting with the next task');