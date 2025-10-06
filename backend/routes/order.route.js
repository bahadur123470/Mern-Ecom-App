import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/order.controller.js'
import adminAuth from '../middleware/admin.auth.js';
import { authUser } from '../middleware/auth.js';

const router = express.Router();

// Admin Features
router.post('/list', adminAuth, allOrders);
router.post('/status', adminAuth, updateStatus);

// Payment features
router.post('/place', authUser, placeOrder);
router.post('/stripe', authUser, placeOrderStripe);
router.post('/razorpay', authUser, placeOrderRazorpay)

// User features
router.post('/userorders', authUser, userOrders);

export default router;