import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { PrismaClient } from './generated/prisma/client.js'
import config from './src/config/config.js';
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import { errorHandler, notFoundHandler } from './src/middlewares/auth.js';
import responseHandler from './src/utils/responseHandler.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: config.corsOptions
});
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors(config.corsOptions));
app.use(responseHandler);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// 
// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});