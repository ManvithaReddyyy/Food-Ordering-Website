import express from 'express'
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

// Route for add items to user cart
cartRouter.post('/add',authMiddleware, addToCart)

// Route for remove items from user cart
cartRouter.post('/remove',authMiddleware, removeFromCart)

// Routes for get user cart
cartRouter.post('/get',authMiddleware, getCart)

export default cartRouter