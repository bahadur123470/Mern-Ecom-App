import express from 'express';
import cors from 'cors';
import { ENV } from './config/env.js';
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.routes.js'

// App config
const app = express();
const port =  ENV.PORT;
connectDB();
connectCloudinary()

//  middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  Api endpoints
app.use('/api/user', userRouter)
app.get('/', (req,res)=>{
    res.send('Api working perfectly')
})

app.listen(port, ()=> console.log(`Server is running on : http://localhost:${port}` ))