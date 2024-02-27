const express = require('express');
const router = express.Router();
const reportGenerateController = require('../controllers/reportGenerateController');

router.get('/', reportGenerateController.testCaseReportGenerate);
router.get('/', reportGenerateController.projectReportGenerate);


module.exports = router;
