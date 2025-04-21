import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { userStatusMap } from '../config/userStatus.js';
import { PrismaClient } from '../../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getAllStatuses = async (req, res) => {
    try {
        res.success(userStatusMap, 'User statuses fetched successfully', 200);
    } catch (error) {
        res.error('Error fetching user data', 500, error.message);
    }
};

export const changeStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const userId = req.user.userId;

        if (!status) {
            return res.error('Status field is required', 400);
        }

        // Validate status using userStatusMap
        const validStatus = userStatusMap[status];
        if (!validStatus) {
            return res.error('Invalid status', 400);
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { status: validStatus }
        });

        res.success(updatedUser.status, 'User status updated successfully', 200);
    } catch (error) {
        res.error('Error updating user status', 500, error.message);
    }
}

