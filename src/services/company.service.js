
// const { findOneAndDelete } = require('../models/company.model');
const Company = require('../models/company.model');


const createNewCompany = async (input) => {
//  const {companyName, careerUrl} =input
  const company = await Company.create(input);
  ;
  return company;
};

const editCompany = async (input) =>{
console.log(input,'input');

try{
  const company = await Company.findOneAndUpdate({

    _id:input._id
    },{$set:{...input}});
    return company;
  }

  catch(e){
    console.log(e,'ERROR')
  }
};

const deleteCompany = async (_id) => {
  const company = await Company.findByIdAndDelete(_id)
  return company;
}

const getAllCompanies = async() => {
  const companies = await Company.find({});
  return companies;
 }

const searchCompanies = async ({companyName}) => {
  console.log(companyName, 'companyName');
  const company = await Company.find({companyName});

  return company;
 }

module.exports = {
  createNewCompany,
  getAllCompanies,
  editCompany,
  searchCompanies,
  deleteCompany,
   
  };