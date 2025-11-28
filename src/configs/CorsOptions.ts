
const origin = process.env.corsOrigin;
const allowedOrigins = [
  origin, 
];


const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    credentials: true,
};


export default corsOptions; 