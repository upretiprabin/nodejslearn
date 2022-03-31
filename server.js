const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + "/public"));

app.use((req,res,next)=>{
    console.log(`${req.url}--${req.method}`)
    next();
})

app.get("/help",(req,res)=>{
    // res.send("hello test");
    res.render("about.hbs");
});

app.get("/",(req,res)=>{
    res.send("hello express");
});


app.listen(3003,()=>{console.log("most useless app is up")});

