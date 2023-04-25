const express = require('express');
const cors=require('cors');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

app.use(cors());
app.use(express.json());
// app.use(bodyparser.urlencoded({extended: false}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://VisheshGarg:mypass01@localhost:27017/Mobilicis-India');

const db=mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", ()=>{
    console.log("Database connected!");
})

const userSchema = mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
},{collection: 'person'});

const User = mongoose.model('person', userSchema);

app.get('/query1', async (req,res)=>{
    try{
        const user = await User.find({
            income: { $lt: '$5 USD' },
            $or: [
                { car: /BMW/ },
                { car: /Mercedes/ }
            ]
        });
        // console.log(user.length);
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
});

app.get('/query2', async (req,res)=>{
    try{
        const user = await User.find({
            gender: "Male",
            $expr: {
                $gt: [ { $toInt: "$phone_price" }, 10000 ]
            }
        });
        // console.log(user.length);
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
});

app.get('/query3', async (req,res)=>{
    try{
        const user = await User.find({
            last_name: /^M/, 
            quote: { $regex: /.{15,}/ }, 
            email: { $regex: new RegExp(User.last_name, 'i') }
        });
        // console.log(user.length);
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
});

app.get('/query4', async (req,res)=>{
    try{
        const user = await User.find({
            $and: [
                { $or: [ { car: /BMW/ }, { car: /Mercedes/ }, { car: /Audi/ } ] },
                { email: { $not: { $regex: /[0-9]/ } } }
            ]
        });
        // console.log(user.length);
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
});

app.get('/query5', async (req,res)=>{
    try {
        const result = await User.aggregate([
          { $group: { _id: '$city', count: { $sum: 1 }, totalIncome: { $sum: { $toDouble: { $substr: [ '$income', 1, -1 ] } } } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
          { $project: { _id: 0, city: '$_id', count: '$count', avgIncome: { $divide: ['$totalIncome', '$count'] } } }
        ]);
        res.send(result);
      } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

app.listen(8000 , ()=>{
    console.log("Listening on port 8000!");
})
