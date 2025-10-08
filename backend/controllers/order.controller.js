import { Order } from "../models/order.model.js"
import { User } from "../models/user.model.js";
import { ENV } from "../config/env.js";
import Stripe from "stripe";
// import { currency } from "../../admin/src/App.jsx";


// global currency variables
const currency = 'usd'
const deliveryCharge = 10

// stripe gateway initialize
const stripe = new Stripe(ENV.STRIPE_SECRET_KEY)

//  placeOrder using COD
export const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address} = req.body;
        const orderData = {
            userId, 
            items, 
            amount, 
            address, 
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }
        const newOrder = new Order(orderData);
        await newOrder.save();
        await User.findByIdAndUpdate(userId, {cartData:{}});
        res.json({
            success: true,
            message: 'Order placed successfully'
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}
// placeOrder using Stripe
export const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address} = req.body;
        const { origin } = req.headers;
        const orderData = {
            userId, 
            items, 
            amount, 
            address, 
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now()
        }
        const newOrder = new Order(orderData)
        await newOrder.save()
        const line_items = items.map((item)=>({
            price_data: {
                currency: currency,
                product_data: {
                    name:item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        })
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })
        res.json({
            success: true,
            session_url: session.url
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}
export const verifyStripe = async (req,res) => {
    const { orderId, success, userId } = req.body
    try {
        if(success === 'true'){
            await Order.findByIdAndUpdate(orderId, {payment:true})
            await User.findByIdAndUpdate(userId, {cartData: {}})
            res.json({
                success: true,
            })
        }
        else {
            await Order.findByIdAndDelete(orderId)
            res.json({
                success: false
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
// placeOrder using Razorpay
export const placeOrderRazorpay = async (req, res) => {

}
// Get user orders - User
export const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({ userId })
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}
// Get all orders - Admin
export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}
// Update order status - Admin
export const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await Order.findByIdAndUpdate(orderId, {status})
        res.json({
            success: true,
            message: 'Status updated'
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}