import { Router } from 'express';
const router = Router();
import { authenticateToken } from '../middlewares/auth.js';
import { getAllStatuses, changeStatus, setGhostMode, updateUser } from '../controllers/userController.js';


router.get('/statuses', getAllStatuses);
router.put('/change', authenticateToken, updateUser);
router.put('/status', authenticateToken, changeStatus);
router.put('/ghost', authenticateToken, setGhostMode);


export default router;