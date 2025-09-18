import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=> {
        console.log("DB connected")
    })
    await mongoose.connect(`${ENV.MONGODB_URI}/e-commerce`)
}

export default connectDB