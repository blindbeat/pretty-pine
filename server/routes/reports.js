import express from 'express';
import {
  createReport,
  deleteReport,
  getManyReports,
  getReport,
} from '../controllers/reports.js';

const router = express.Router();

router.route('/').get(getManyReports).post(createReport);
router.route('/id').get(getReport).delete(deleteReport);

export default router;
