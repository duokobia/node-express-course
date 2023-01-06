const http = require('http'); //module name

const server = http.createServer((req, res) => {
    //req - incoming request. Can be named anything. But the convention is req. Both req and res are objects.
    //res - outgoing response. Can be named anything. But the convention is res.
   
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else res.end(`
        <h1>Ooops!</h1>
        <p>We can't seems to find the page you are looking for!</p>
        <a href="/">back home</a>
        `
    );
});

//The port we want our server to listen on is: 5000
server.listen(5000);
