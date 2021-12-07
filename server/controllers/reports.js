// import { body, validationResult } from 'express-validator';
import Report from '../models/reportModel.js';

export const getReport = async (req, res) => {
  const report = await Report.findOne({ _id: req.params.id });
  res.json(report);
};

export const deleteReport = async (req, res) => {
  await Report.deleteOne({ _id: req.params.id });
  res.sendStatus(204);
};

export const getManyReports = async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
};

export const createReport = async (req, res) => {
  // somecode
};

// router.post('/',
//   body('name').trim().not().isEmpty(),
//   body('surname').trim().not().isEmpty(),
//   body('birthday').if(body('birthday').exists()).isISO8601(),
//   body('mobile').trim(),
//   body('work').trim(),
//   body('info').trim(),
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         res.status(400).json({ errors: errors.array() });
//         return;
//       }
//       const {
//         name, surname, middlename, birthday, mobile, work, info,
//       } = req.body;
//       const report = new Report({
//         name,
//         surname,
//         middlename: middlename || null,
//         birthday: birthday || null,
//         mobile: mobile || null,
//         work: work || null,
//         info: info || null,
//       });

//       const mongoAnswer = await report.save();
//       console.log(mongoAnswer);
//       res.sendStatus(201);
//     } catch (error) {
//       console.log(error);
//     }
//   });
