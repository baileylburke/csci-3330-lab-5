import express from "express"
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res)=>{
    res.send("Hello from the server app");
})

app.get("/about", (req, res)=>{
    res.send("<h1>Hellow from the server app - about site</h1>");
})

app.get("/web", (req, res)=>{
    // res.sendFile(path.join(import.meta.dirname, "index.html"));
    res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
})

app.listen(port, ()=> {
    console.log('Server started listening on port ${port}');
})

