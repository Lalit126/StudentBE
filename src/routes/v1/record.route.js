
const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);
// router.get('/allrecords', recordController.getAllRecords);
router.get('/allrecords', recordController.getAllRecords);
router.get('/search', recordController.searchRecords);
router.put('/editrecord', recordController.editRecord);  // 
router.delete('/deleterecord', recordController.deleteRecord);  // 
router.post('/createnewfakerecords', recordController.createNewFakeRecords);
router.get('/getpaginatedrecords', recordController.getPaginatedRecords);
router.get('/getrecordbyid', recordController.getRecordById);
// router.post('/getpaginatedrecords/:next_cursor/:limit', recordController.createNewFakeRecords);





module.exports = router;