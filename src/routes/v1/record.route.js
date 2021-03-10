
const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);
router.get('/allrecords', recordController.getAllRecords);
router.put('/editrecord', recordController.editRecord);
router.delete('/deleterecord', recordController.deleteRecord);



module.exports = router;