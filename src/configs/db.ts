import mongoose from 'mongoose';

require('dotenv').config();

// MongoDB connection URI from environment variables
const BD_URI: string = process.env.MONGODB_URI as string

// Function to connect to the database
 const connectDB = async (): Promise<void> => {
    try {
        // Connect to MongoDB through Mongoose
        await mongoose.connect(BD_URI)
        // Log success message
        console.log('Database connected successfully ✅')
    } catch (error: Error | unknown) {
        // Log error message
        console.log('Error connecting to the database. ❌')
    }
}

export default connectDB