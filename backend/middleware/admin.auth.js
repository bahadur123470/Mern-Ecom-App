import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js';

const adminAuth = (req,res,next) => {
    try {
        const { token } = req.headers;
        if (!token){
            return res.json({
                success: false,
                message: "Unauthorized Access Denied"
            })
        }
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (decoded !== ENV.ADMIN_EMAIL + ENV.ADMIN_PASSWORD){
            return res.json({
                success: false,
                message: "Unauthorized Login Denied"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

export default adminAuth;