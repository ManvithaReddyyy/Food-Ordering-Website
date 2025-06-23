import userModel from '../models/userModel.js'

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData

        // If item is not already in cart, add it with quantity 1, else increment quantity by 1
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })

        res.json({ success: true, message: 'Item added to cart successfully' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal Server Error' })
    }
}

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData

        // If item is in cart, decrement quantity by 1
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1
        } 

        // Update user cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })

        res.json({ success: true, message: 'Item removed from cart successfully' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal Server Error' })
    }
}

// Get user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal Server Error' })
    }
}

export { addToCart, removeFromCart, getCart }