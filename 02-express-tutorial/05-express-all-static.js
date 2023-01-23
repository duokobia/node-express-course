const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

// If we are using the sendFile to send index.html, we use the other 2 methods instead: 
// 1. We just add the index.html to static assets directly. That is, dump all static 
// resources including the index.html files in the static assets(public) folder. 
// 2. The other way is Server Side Rendering(SSR). This is a situation where we basically
// use template engine for handling that. 

// })


app.all("*", (req, res) => {
    res.status(404).send("resource not found"); 
    }
);

app.listen(5000, () => {
    console.log("Server listening on port: 5000...")
    }
);