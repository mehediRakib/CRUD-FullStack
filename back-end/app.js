
const express=require('express');
const bodyParser=require('body-parser');
const helmet=require('helmet');
const cors=require('cors');
const hpp=require('hpp');
const rateLimit=require('express-rate-limit');
const mongoSanitize=require('express-mongo-sanitize');
const mongoose=require('mongoose')
const app=new express();



//security middlware
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb"}));
app.use(bodyParser.json());


//ratelimit
const limiter=rateLimit({windowMs:15*60*1000,max:300});
app.use(limiter);


const router=require('./src/routes/api')



//database Connection
const URL="mongodb://localhost:27017/CRUD";

const option = {
    user:'', pass:''
};

mongoose.connect(URL,option)
    .then(()=>{
        console.log("connction established")
    })
    .catch((e)=>{
        console.log(e);
    })



//Require Router
app.use('/api/v1',router);



//unkonwn route handling
app.use("*",(req,res)=>{
    res.status(200).json({status:"404",data:"Not Found"})
})

module.exports=app;

