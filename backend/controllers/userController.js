import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// Login user 
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        // Check if user exists
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: 'Incorrect password' })
        }

        // Create JWT token
        const token = createToken(user._id)

        res.json({ success: true, message: 'User logged in successfully', token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal server error' })
    }
}

// Create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY)
}

// Register user 
const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const exists = await userModel.findOne({ email })

        // Check if user is already registered
        if (exists) {
            return res.json({ success: false, message: 'User with this email already exists' })
        }

        // Check if email format is valid
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Invalid email address' })
        }

        // Check if password is valid
        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long' })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword        
        })

        // Save user to database
        const user = await newUser.save()

        // Create JWT token
        const token = createToken(user._id)

        res.json({ success: true, message: 'User registered successfully', token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal server error' })
    }
}

export { loginUser, registerUser }