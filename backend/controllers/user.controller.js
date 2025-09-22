import { User } from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";


export const createToken = (id) => {
    return jwt.sign({id}, ENV.JWT_SECRET)
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        //  user  existence  ( check )
        if (!user) {
            return res.json({
                success: false,
                message: "User doesn't exists",
            })
        }
        //  Password match check as prev 
        const isMatch = await bcrypt.compare(password,user.password)
        if (isMatch){
            const token = createToken(user._id)
            res.json({
                success: true,
                token
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }

}

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //  user  existence  ( check )
        const  exists = await User.findOne({email});
        if (exists){
            return res.json({
                success: false,
                message: "User already exists"
            })
        }
        //  validating email  ( check )
        if (!validator.isEmail(email)){
            return res.json({
                success: false,
                message: " Please enter a valid email"
            })
        }
        //  validating password 
        if (password.length < 8){
            return res.json({
                success: false,
                message: "Please enter a strong password"
            })
        }
        //  Hashing password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        //  Save user after getting all things
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save();
        //  JWT token 
        const token = createToken(user._id)
        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error creating new User"
        })
    }
}

export const adminLogin = async (req, res) => {
    res.json({msg:"Admin Api working"})

}