import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import apiRouter from './routes/reports.js';

const app = express();
const upload = multer();
const port = process.env.PORT;

app.use(upload.none());

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/api/v1/reports', apiRouter);

mongoose.connect('mongodb://localhost:27017/pretty-pine')
  .then(() => console.log('connected to db'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
