// This is a synchronous process. The "about" block does only loads 
// but also blocks other pages from loading until it finishes the nested "for-loop" process.
const http = require("http");

const server = http.createServer((req, res) =>{
 if (req.url === "/"){
    res.end("Home Page")
 }
 else if (req.url === "/about"){
    //BLOCKING CODE !!!
    // A nested for loop is a synchronous (blocking) code. Synchronous codes take a long time to run and slows down our application.
    // When the user navigates to "/about", running the "for-loop" would take some time.
    // You will expect that only the user who navigates here(to "/about") gets blocked. That will be wrong!
    // We will also block other users who are trying to get to the home page and error page.
    // Only when we done with the for-loop operation in the "/about" page will the other users be able to access the other resources.
    for (let i = 0; i < 1000; i++ ){
        for (let j = 0; j < 1000; j++ ){
            console.log(`${i} ${j}`);
        }
    };
    res.end("About Page")
 }
   else res.end("Error Page");
});

server.listen(5000, () => {
    console.log("Server listening on port: 5000...")
});