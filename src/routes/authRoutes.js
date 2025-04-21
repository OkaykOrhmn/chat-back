import { Router } from 'express';
const router = Router();
import { authenticateToken } from '../middlewares/auth.js';
import { register, login, getCurrentUser } from '../controllers/authController.js';

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', authenticateToken, getCurrentUser);


export default router;