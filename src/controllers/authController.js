import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../../generated/prisma/client.js';

const prisma = new PrismaClient();

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser) {
            return res.error('Username already exists', 400);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.success({
            token,
            user: {
                id: user.id,
                username: user.username
            }
        }, 'User registered successfully', 201);
    } catch (error) {
        res.error('Error creating user', 500, error.message);
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            return res.error('User not exist', 401);
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.error('Password is incorrect', 401);
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.success({
            token,
            user: {
                id: user.id,
                username: user.username
            }
        }, 'Login successful');
    } catch (error) {
        res.error('Error logging in', 500, error.message);
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            omit: { password: true }
        });

        if (!user) {
            return res.error('User not found', 404);
        }

        res.success(user, 'User retrieved successfully');
    } catch (error) {
        res.error('Error fetching user data', 500, error.message);
    }
};

