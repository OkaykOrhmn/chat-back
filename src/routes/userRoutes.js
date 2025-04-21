import { Router } from 'express';
const router = Router();
import { authenticateToken } from '../middlewares/auth.js';
import { getAllStatuses, changeStatus } from '../controllers/userController.js';


router.get('/statuses', getAllStatuses);
router.put('/status', authenticateToken, changeStatus);


export default router;