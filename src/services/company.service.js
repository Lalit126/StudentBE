const { findOneAndDelete } = require('../models/company.model');
const Company = require('../models/company.model');

const createNewCompany = async (input) => {
  const company = await Company.create(input);
  ;
  return company;
};

const editCompany = async (input) => {
  console.log(input,'input');
  try {

    const company = await Company.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    return company;
  }
  catch(e){
    console.log(e,'ERROR');
  }
};

const getAllCompanies = async () => {
  const company = await Company.find({});
  return company;
};

const deleteCompany = async (_id) => {
  const company = await Company.findByIdAndDelete(_id)
  return company;
};

const searchCompaniesByKeyWord = async (searchText) => {

  const regex = new RegExp(searchText,'gmi')

  const comp = await Company.find(
    {$or:
  [
    {companyName :{$regex: regex}},
    {careerUrl :{$regex: regex}},
]
})

  console.log(comp,'comp');
   return comp;
  
};


const searchCompanies = async (keyword) => {
  console.log(keyword,'keyword from SERVICE');
  const regex = new RegExp(keyword,'gmi')
  const company = await Company.find(
    {$or:
  [
    {companyName :{$regex: regex}},
    {careerUrl :{$regex: regex}},
]
})
  console.log(company,'company');
  
  return company;
};

const getCompanyById = async (Id) => {
  const com = await Company
  .find({_id:Id})
  
  
  return com;
};


module.exports = {
  createNewCompany,
  getAllCompanies,
  searchCompanies,
  editCompany,
  deleteCompany,
  searchCompanies,
  searchCompaniesByKeyWord,
  getCompanyById,
   
  };
  