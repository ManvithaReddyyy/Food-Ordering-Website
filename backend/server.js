// Load environment variables 
import 'dotenv/config'

// Core imports
import express from 'express'
import cors from 'cors'
import path from 'path'

// Database connection
import { connectDB } from './config/db.js'

// Routes
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// Fix __dirname for ES Modules
const __dirname = path.resolve()

// App initialization
const app = express()
const port = process.env.PORT || 3000

// Debugging keys
console.log('JWT Key:', process.env.JWT_SECRET_KEY)
console.log('Stripe Key:', process.env.STRIPE_SECRET_KEY)

// Middleware
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}))

// Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/images', express.static(path.join(__dirname, '/uploads')))

// Connect to MongoDB
connectDB()

// API Routes
app.use('/api/food', foodRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)  

import authRouter from './routes/authRoute.js'
app.use('/api/auth', authRouter)


// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the backend server')
})

// Start the server
app.listen(port, () => {
    console.log(`✅ Server running at: http://localhost:${port}`)
})
