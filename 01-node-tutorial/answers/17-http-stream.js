var http = require('http');
var fs = require('fs');

//Sending the big data in one instance will block other users. So the data should be sent in chunks to make your application load faster.You can see this in the developer tools
http
.createServer(function (req, res){

    //SENDING THE WHOLE BIG DATA ALL AT ONCE:
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);

    //USING STREAM TO SEND RESPONSE IN CHUNKS:
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        // What the pipe does is to push data from the read stream into the write stream.
        // Since we can read data in chunks, we can also write data in chucks. The pipe stream
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
})
.listen(5000);