import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router()

// Image storage using multer
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

// Middleware for image upload
const upload = multer({ storage: storage })

// Route for adding food item
foodRouter.post('/add', upload.single('image'), addFood)

// Route for listing all food items
foodRouter.get('/list', listFood)

// Route for removing a food item
foodRouter.post('/remove', removeFood)

export default foodRouter