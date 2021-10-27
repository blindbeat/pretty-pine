import express from "express"
import mongoose from "mongoose";
import report from "./routes/report.route.js"
const app = express();


const port = process.env.port || 5000

mongoose.connect('mongodb://localhost:27017/pretty-pine')
    .then(() => console.log('connected to db'))
    .catch(error => console.log(error))


app.get('/', (req, res) => {
    res.send('hello world!');
})

app.use('/api/report', report);

app.listen(port, () => {
    `server listening on port ${port}`
})