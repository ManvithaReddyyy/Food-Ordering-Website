import orderModel from '../models/ordermodel.js'
import userModel from '../models/userModel.js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// ✅ Placing user order (requires login with token)
const placeOrder = async (req, res) => {
  const frontend_url = 'http://localhost:5173'

  try {
    const userId = req.userId // ✅ From authMiddleware

    console.log("🔐 userId from token:", userId)
    console.log("📦 items:", req.body.items)
    console.log("💰 amount:", req.body.amount)

    // Save order in MongoDB
    const newOrder = new orderModel({
      userId: userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    })

    await newOrder.save()

    // Clear user's cart after order
    await userModel.findByIdAndUpdate(userId, { cartData: {} })

    // Stripe line items
    const line_items = req.body.items.map((item) => ({
      price_data: {
         currency: 'inr',
         product_data: { name: item.name },
         unit_amount: item.price * 100
         },
      quantity: item.quantity
    }))

    // Add delivery charges
    line_items.push({
      price_data: {
        currency: 'inr',
        product_data: { name: 'Delivery Charges' },
        unit_amount: 2 * 100
      },
      quantity: 1
    })

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })

    return res.json({ success: true, session_url: session.url })
  } catch (error) {
    console.log("❌ Error placing order:", error.message)
    return res.status(500).json({ success: false, message: 'Error in placing order' })
  }
}

// ✅ Verifying payment
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body

  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      res.json({ success: true, message: 'Payment successful' })
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({ success: false, message: 'Payment failed' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error in verifying order' })
  }
}

// ✅ Getting logged-in user's orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.userId, payment: true })
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error in getting orders' })
  }
}


// ✅ Getting all orders (admin)
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error in getting orders' })
  }
}

// ✅ Admin updates order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
    res.json({ success: true, message: 'Order status updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error in updating order status' })
  }
}

export { placeOrder, verifyOrder, userOrders, allOrders, updateStatus }
