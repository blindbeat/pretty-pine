import express from 'express';
import reportController from './reportController.js';

const router = express.Router();

router.use('/reports', reportController);

export default router;
