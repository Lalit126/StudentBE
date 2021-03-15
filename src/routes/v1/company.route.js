
const express = require('express');
const companyController = require('../../controllers/company.controller');

const router = express.Router();

//careerUrl 

router.post('/createnewcompany', companyController.createNewCompany);
router.get('/allcompanies', companyController.getAllCompanies);
router.get('/searchcompanies', companyController.searchCompanies);//pass in search paramter
router.put('/editcompany', companyController.editCompany);  // 
router.delete('/deletecompany', companyController.deleteCompany);  // 
router.get('/getcompanybyid', companyController.getCompanyById);






module.exports = router;