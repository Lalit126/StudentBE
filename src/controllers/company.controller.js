const httpStatus = require('http-status');
const {companyService, recordService } = require('../services');

const createNewCompany = async (req, res) => {
  const comp = await companyService.createNewCompany(req.body);
 console.log(comp,'comp');
res.status(httpStatus.CREATED).send(comp);
};

const deleteCompany = async (req, res) => {
const {_id} = req.query

const deletedRecs = await recordService.deleteManyByCompanyId(_id);
const comp = await companyService.deleteCompany(_id);
console.log(comp,'comp');
res.status(httpStatus.CREATED).send(comp);
};

const editCompany = async (req, res) => {
  const comp = await companyService.editCompany(req.body);
 console.log(comp,'comp');
res.status(httpStatus.CREATED).send(comp);
};

const getAllCompanies = async (req, res) => {
   comp = await companyService.getAllCompanies()
   res.status(httpStatus.CREATED).send(comp);
} 

const searchCompanies = async (req, res) => {
  console.log(req.query,'RES.QUERY')
  const {keyword} = req.query
  comp = await companyService.searchCompanies(keyword)
  res.status(httpStatus.CREATED).send(comp);
  console.log(comp,'comp');

};

const getCompanyById = async (req, res) => {
  const query= req.query
  const comp = await companyService.getCompanyById(query.Id);
 console.log(comp,'comp');
res.status(httpStatus.CREATED).send(comp[0]);
};


module.exports = {
  createNewCompany,
  getAllCompanies,
  searchCompanies,
  editCompany,
  deleteCompany,
  getCompanyById
  
};