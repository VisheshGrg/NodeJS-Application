const express = require('express');
const app = express();
// const path=require('path');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/Mobilics-India');

const db=mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", ()=>{
    console.log("Database connected!");
})

app.use(express.urlencoded({extended: true}));

app.get('/home', (req,res)=>{
    res.send("Hello user!");
})

app.all('*', (req,res,next)=>{
    next(new ExpressError('Page not found!',404));
})

app.use((err,req,res,next)=>{
    const {status=500} = err;
    if(!err.message) err.message = 'Something went wrong!';
    res.status(status).render('errors', {err});
})

app.listen(3000 , ()=>{
    console.log("Listening on port 3000!");
})
