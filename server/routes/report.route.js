import express from "express"
import { body, validationResult } from "express-validator";
import multer from "multer";
import Report from "../models/Report.js";

const router = express.Router();
const upload = multer()

router.use(upload.none())

router.post('/',
  body('name').trim().not().isEmpty(),
  body('surname').trim().not().isEmpty(),
  body('birthday').if(body('birthday').exists()).isISO8601(),
  body('mobile').trim(),
  body('work').trim(),
  body('info').trim(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
      }
      const { name, surname, middlename, birthday, mobile, work, info } = req.body
      const report = new Report({
        name,
        surname,
        middlename: middlename ? middlename : null,
        birthday: birthday ? birthday : null,
        mobile: mobile ? mobile : null,
        work: work ? work : null,
        info: info ? info : null
      })

      const mongoAnswer = await report.save()
      console.log(mongoAnswer);
      res.sendStatus(200)
    } catch (error) {
      console.log(error);
    }
  })

export default router;