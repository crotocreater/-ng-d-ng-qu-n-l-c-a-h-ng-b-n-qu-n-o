import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("server run oke");
})

app.listen(port, ()=>{console.log("App run in " + port)});