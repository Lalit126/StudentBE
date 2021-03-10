const httpStatus = require('http-status');
const {recordService } = require('../services');
const {companyService } = require('../services');

const createNewRecord = async (req, res) => {
const {companyName, careerUrl, universityName, graduationYear, jobTitle, specialization,
jobStartDate} =req.body

const companyInput = {
      companyName,
      careerUrl
}

const recordInput = {
      universityName,
      graduationYear,
      jobTitle,
      specialization,
      jobStartDate
  };


const doCompanyExist = await companyService.searchCompanies({companyName});
console.log(doCompanyExist,'doCompanyExist')
let newRecordInput
if (doCompanyExist.length>0){
  newRecordInput={...recordInput,company:doCompanyExist[0]._id}
 }
else 
 { const comp = await companyService.createNewRecord(companyInput);
   newRecordInput = {...recordInput,company:comp._id}
 }

const rec = await recordService.createNewRecord(newRecordInput);
  res.status(httpStatus.CREATED).send(rec);
};

const getAllRecords = async (req, res) =>{
  comp = await recordService.getAllRecords()
  res.status(httpStatus.CREATED).send(comp);
}

const deleteRecord = async (req, res) =>{
  const {_id} = req.query
  const comp = await recordService.deleteRecord(_id);
  res.status(httpStatus.CREATED).send(comp);
}

const editRecord = async (req, res) => {
  const comp = await recordService.editRecord(req.body);
 console.log(comp,'comp');
res.status(httpStatus.CREATED).send(comp);
};

module.exports = {
    createNewRecord,
    getAllRecords,
    deleteRecord,
    editRecord,
    
  
};