import express from 'express'
import {
  placeOrder,
  verifyOrder,
  userOrders,
  allOrders,
  updateStatus
} from '../controllers/orderController.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

// Route to place an order (requires login)
router.post('/place', authMiddleware, placeOrder)

// Route to verify payment
router.post('/verify', verifyOrder)

// Get user-specific orders (requires login)
router.post('/user', authMiddleware, userOrders)

// Admin: get all orders
router.get('/admin', allOrders)

// Admin: update status
router.post('/status', updateStatus)

export default router
