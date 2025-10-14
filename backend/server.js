import express from 'express';
import cors from 'cors';
import { ENV } from './config/env.js';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

// App config
const app = express();
const port = ENV.PORT;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.get('/', (req, res) => {
  res.send('Api working perfectly');
});

// Export the app for Vercel serverless
export default app;

// Only start the server when not running on Vercel
if (!process.env.VERCEL) {
  app.listen(port, () =>
    console.log(`Server is running on : http://localhost:${port}`)
  );
}
