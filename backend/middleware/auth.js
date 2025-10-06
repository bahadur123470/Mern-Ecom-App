import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js'

export const authUser = (req, res, next) => {
    const { token } = req.headers;
    if(!token){
        return res.json({
            success: false,
            message: 'Not Authorized, login required'
        })
    }
    try {
        const token_decode = jwt.verify(token, ENV.JWT_SECRET)
        req.body.userId = token_decode.id
        next();
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}