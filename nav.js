/*
www.thapa.com - welcome to my home page
about - welcome to my about page
contact - welcome to my contact page
temp = welcome to my  temp page
*/

const express = require('express');
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`lisening to the port no ${port}`);
});

// app.get(route, callback )
app.get('/',  (req, res) =>{
    res.send("welcome to my home page");
});

app.get('/Contact',  (req, res) =>{
    res.send("welcome to my  about page");
});