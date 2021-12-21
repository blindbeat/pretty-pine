import mongoose from 'mongoose';

const { Schema } = mongoose;

const reportSchema = Schema({
  name: { type: String, required: [true, 'name is required'], trim: true },
  surname: { type: String, required: [true, 'surname is required'], trim: true },
  middlename: { type: String, trim: true },
  birthday: Date,
  mobile: { type: String, trim: true },
  work: { type: String, trim: true },
  info: { type: String, trim: true },
}, {
  timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);
export default Report;
