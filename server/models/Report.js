import mongoose from "mongoose"
const { Schema } = mongoose

const reportSchema = Schema({
    name: String,
    surname: String,
    middlename: String,
    birthday: Date,
    mobile: Number,
    work: String,
    info: String
}, {
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
export default Report;