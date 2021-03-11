const httpStatus = require('http-status');
const {recordService } = require('../services');
const {companyService } = require('../services');
var faker = require('faker');
const _ = require('lodash')


const createNewRecord = async (req, res) => {
const {companyName,careerUrl,universityName, graduationYear,
  specialization,jobTitle,jobStartDate} 
  =req.body

const companyInput ={
  companyName,
  careerUrl
}
let recordInput ={
    universityName,
    graduationYear,
    specialization,
    jobTitle,
    jobStartDate
}
  const doCompanyExist= await companyService.searchCompanies({companyName});
let newRecordInput
if(doCompanyExist.length>0){
  newRecordInput={...recordInput,company:doCompanyExist[0]._id}
}
else {
  const comp = await companyService.createNewCompany(companyInput);
  newRecordInput={...recordInput,company:comp._id}
}

const rec = await recordService.createNewRecord(newRecordInput);
res.status(httpStatus.CREATED).send(rec);
};

/////////////************************************************** */
const createNewFakeRecords = async (req, res) => {

  for (let i =0 ;i <10 ;i++) {
    console.log(i,'IIIIIIII')

    console.log('I am in createfake records');
    let companyInput ={
      companyName:faker.company.companyName(),
      careerUrl:faker.internet.url(),
    }
    let recordInput ={
        universityName:`university of ${faker.address.city()}`,
        graduationYear:2020,
        specialization:faker.commerce.department(),
        jobTitle:faker.name.jobTitle(),
        jobStartDate:faker.date.past()
    }
  
    
  
   const comp = await companyService.createNewCompany(companyInput);
          newRecordInput={...recordInput,company:comp._id}
        
        const rec = await recordService.createNewRecord(newRecordInput);
  
  };
  }

 
 


const deleteRecord = async (req, res) => {
const {_id} = req.query
const comp = await recordService.deleteRecord(_id);
  res.status(httpStatus.CREATED).send(comp);
  };

const searchRecords = async (req, res) => {
const {searchText} = req.query
const comp = await recordService.searchRecords(searchText);
const compRec = await companyService.searchCompaniesByKeyWord(searchText);
console.log(compRec);
const accumulateIds =compRec.map(i=>i._id)
console.log(accumulateIds);
const recsWithKw = await recordService.getRecordsByCompanyId(accumulateIds);
const mergeRec=[...comp,...recsWithKw]
console.log(mergeRec,'mergeRec');
const deDupValue=_.uniqBy(mergeRec,'_id')
console.log(deDupValue,'deDupValue');
res.status(httpStatus.CREATED).send(deDupValue);
  };





  const editRecord = async (req, res) => {
    const comp = await recordService.editRecord(req.body);
   console.log(comp,'comp');
  res.status(httpStatus.CREATED).send(comp);
  };


  const getAllRecords = async (req, res) => {
    comp = await recordService.getAllRecords()
    res.status(httpStatus.CREATED).send(comp);
 } 

  const getPaginatedRecords = async (req, res) => {
    console.log('I am in Paginated controller');
    let { next_cursor = null, limit = 25}= req.query
    comp = await recordService.getPaginatedRecords({next_cursor,limit})
    console.log(comp.length,'comp.length');
    res.status(httpStatus.CREATED).send(comp);
 } 

 

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,
    editRecord,
    createNewFakeRecords,
    searchRecords,
    getPaginatedRecords
  
};