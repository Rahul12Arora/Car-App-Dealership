const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001;

const express =  require('express');
const app = express();

const mongoDB =require("./db");
mongoDB();

app.use(express.json());
app.post("/api/signup",(req,res)=>{
    res.send("user created successfully");
})
// app.get('/', (req, res) => {
//     // res.sendStatus(200);
//     res.send('ching chong');
//     // res.status(200).send('ching chong');
//     // res.status(200).json({message:"chong ching")}
//     // res.json() sends a default success code as we eliminated the status request
//     // res.download('index.js'); can be used to send data to user that he can download, provide file path as argument
// })

app.listen(port,()=>{
    console.log('server started');
});