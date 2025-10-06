import { Order } from "../models/order.model.js"
import { User } from "../models/user.model.js";


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

}