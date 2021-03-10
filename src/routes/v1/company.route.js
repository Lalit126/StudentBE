
const express = require('express');
const companyController = require('../../controllers/company.controller');


const router = express.Router();

router.post('/createnewcompany', companyController.createNewCompany);
router.get('/allcompanies', companyController.getAllCompanies);
router.get('/searchcompanies', companyController.searchCompanies);
router.put('/editcompany', companyController.editCompany);
router.delete('/deletecompany', companyController.deleteCompany);



module.exports = router;