import express from "express"
import Report from "../models/Report.js";

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('hello test');
})

export default router;