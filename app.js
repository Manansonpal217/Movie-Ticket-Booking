import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from '../backend/routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import movieRouter from './routes/movie-routes.js';
import bookingsRouter from './routes/booking-routes.js';
import cors from 'cors'
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.36pisah.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})
app.use("/",(req,res,next)=> 
{
    res.send("Hi");
})

app.listen(5000,()=>
{
    console.log("Connected succesfully");
})

