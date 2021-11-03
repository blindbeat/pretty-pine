import mongoose from 'mongoose';

const { Schema } = mongoose;

const reportSchema = Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  middlename: String,
  birthday: Date,
  mobile: String,
  work: String,
  info: String,
}, {
  timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);
export default Report;
