import mongoose from'mongoose'

// Connect to MongoDB
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manvitha:manvitha123@cluster0.nkkqqsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('DB connected successfully'))
}