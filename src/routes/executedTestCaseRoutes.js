// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const executedTestCase = require('../controllers/executedTestCaseController');


router.put('/:id/status', executedTestCase.updatedTestCasetatus);


module.exports = router;
