const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    isApproved:{type: Boolean,default:false},
    universityName:{type: String},
    graduationDate:{type: Date},
    specialization:{type: String},
    jobTitle:{type: String},
    jobStartDate:{type: Date},
    },
  {
    timestamps: true,
  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;