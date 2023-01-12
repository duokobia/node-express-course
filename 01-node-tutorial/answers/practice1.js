const mySentence = require('./practice2');
const os = require('os');
const fs = require('fs');

// AN ASYNCHRONOUS CODE THAT WILL CREATE A FILE:
// code that will create a file, ./content/practice.txt. Use asynchronous write operations.

const { writeFile } = require('fs');

writeFile(
    './content/practice.txt', 
   
    `Latest update:  ${mySentence.sentence} ${os.userInfo().username}`,
    {flag: 'a'},
    (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        console.log('Completed async file writing process');
    }
);