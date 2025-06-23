import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ DB connected successfully');
  } catch (error) {
    console.error('❌ DB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};
