// Node.js essential modules
import express from 'express';
import morgan from 'morgan' // HTTP request logger middleware
import cors from 'cors' // CORS module
import dotenv from 'dotenv' // Environment variable module

// Configurations
import connectDB from './configs/db' // Database connection function
import corsOptions from './configs/CorsOptions';

// Routes
import pingRoutes from './routes/spells.routes' // Ping routes
import passRoutes from './routes/pass.routes' // Password routes
dotenv.config(); // Load environment variables from .env file

// Start Express application
const app: express.Application = express();

// Connect to the database
connectDB().catch((error) => console.error('Database connection failed:', error));

// Set up middlewares
app.use(cors(corsOptions)); // Apply CORS middleware with options
app.use(morgan('dev')); // Use morgan for logging HTTP requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Define routes
app.use('/api/spells', pingRoutes)
app.use('/api/ping', (req, res) => {
    res.status(200).send('pong');
});
app.use('/api/pass', passRoutes);

// Start the server
const port = process.env.PORT || 3000; // Server port from environment variables or default to 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`);
}).on('error', (error: Error) => {
    console.error('Error starting the server:', error);
});