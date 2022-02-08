import express from 'express';
import 'dotenv/config' // new es6 syntax?
import mongoose from 'mongoose';
import multer from 'multer';
import apiRouter from './routes/reports.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const upload = multer();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/api/v1/reports', upload.none(), apiRouter);

app.use(notFound);
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/pretty-pine')
  .then(() => console.log('connected to database'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
