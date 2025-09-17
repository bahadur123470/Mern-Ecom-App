import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// App config
const app = express();
const port = process.env.PORT || 4000;

//  middleware 
app.use(express.json());
app.use(cors());

//  Api endpoints
app.get('/', (req,res)=>{
    res.send('Api working perfectly')
})

app.listen(port, ()=> console.log(`Server is running on : http://localhost:${port}` ))