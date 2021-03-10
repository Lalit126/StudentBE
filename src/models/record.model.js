const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordSchema = mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    isAprroved: {type: Boolean,default:false},
    universityName: {type: String},
    graduationYear: {type: Number, min:1950, max:2090, default:2020},
    specialization:{type: String},
    jobTitle: {type: String},
    jobStartDate:{type: Date, default:Date.now()},
  },
  {
    timestamps: true,


  }
);



const Record = mongoose.model('Record', recordSchema);

module.exports = Record;