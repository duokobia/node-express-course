// Two paths to file system: Asynchronously - non-blocking or Synchronously - blocking.

//This is the Async - non-blocking path:
const {readFile, writeFile} = require('fs'); // Destructured

console.log('start');

// For the Async method, we need to provide a callback, which runs when the process is complete.
readFile('./content/first.txt', 'utf8', (err,result) => {
    //first error handling checks:
    if(err){
        console.log(err);
        return;
    };
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        //first error handling checks:
        if(err){
            console.log(err);
            return;
        };
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            // { flag: 'a'} //Node will append this if set to 'a'.
            (err,result) => {
                if(err){
                    console.log(err);
                    return;
                };
                console.log('done with the this task');
            }
        );
    });

});// If you dont provide the utf(xxx) argument, you will get buffer in the log: readFile('./content/first.txt', 'xxx', (err,result)=>{

console.log('starting with the next task');