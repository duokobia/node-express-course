const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 90000, 
    encoding: 'utf-8', 
});

// By default, the size of the buffer is 64kb.
// highWaterMark controls the size of the buffer.

stream.on('data', (result) => {
    console.log(result)
});

// We have the error event as well
stream.on('error', (err) => console.log(err))