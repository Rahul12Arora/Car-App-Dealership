const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001;
const userdata = require('./userdata')
const express =  require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept"
//     );
//     next();
// })

const mongoDB =require("./db");
mongoDB();
// console.log(userdata);
app.get('/',(req,res)=>{
    res.send('server running for get')
})

app.post("/login",(req,res)=>{
const {username,password} = req.body;
// console.log(username + "    " + password);
let usersfound = userdata.filter(obj=>{
    if(obj.name === username) return true;
})

if(usersfound.length==0) res.json({success:false})
else{
    usersfound.forEach(obj=>{
        if(obj.password === password) res.json({success:true})
    })
}

res.json({success:false})
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