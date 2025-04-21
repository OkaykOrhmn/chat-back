import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOptions: {
        origin: process.env.NODE_ENV === 'production'
            ? process.env.CORS_ORIGIN
            : '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
};

export default config;