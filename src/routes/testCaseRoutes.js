// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const testCaseController = require('../controllers/testCaseController');

router.get('/', testCaseController.getAllTestCase);
router.post('/', testCaseController.createTestCase);
router.get('/:id', testCaseController.getTestCaseById);
router.put('/:id', testCaseController.updateTestCase);
router.delete('/:id', testCaseController.deleteTestCase);

module.exports = router;
