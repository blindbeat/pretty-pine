import express from 'express';
import mongoose from 'mongoose';
import apiController from './controllers/index.js';

const app = express();

const port = process.env.PORT;
console.log(process.env.NODE_ENV);

mongoose.connect('mongodb://localhost:27017/pretty-pine')
  .then(() => console.log('connected to db'))
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/api', apiController);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
