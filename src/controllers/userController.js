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


export const setGhostMode = async (req, res) => {
    try {
        const { enable } = req.body;
        const userId = req.user.userId;

        if (enable === undefined) {
            return res.error('enable field is required', 400);
        }


        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { ghostMode: enable }
        });

        res.success(updatedUser.ghostMode, 'User in Ghost Mode', 200);
    } catch (error) {
        res.error('Error updating user status', 500, error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const { firstname, lastname, bio, username, phoneNumber, email, newPassword } = req.body;
        const userId = req.user.userId;

        const updateData = {};
        if (firstname !== undefined) {
            updateData.firstname = firstname;
        }
        if (lastname !== undefined) {
            updateData.lastname = lastname;
        }
        if (bio !== undefined) {
            updateData.bio = bio;
        }
        if (username !== undefined) {
            updateData.username = username;
        }
        if (phoneNumber !== undefined) {
            updateData.phoneNumber = phoneNumber;
        }
        if (email !== undefined) {
            updateData.email = email;
        }
        if (newPassword !== undefined) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            updateData.password = hashedPassword;
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData
        });

        res.success(updatedUser, 'User updated successfully', 200);
    } catch (error) {
        res.error('Error updating user', 500, error.message);
    }
}

