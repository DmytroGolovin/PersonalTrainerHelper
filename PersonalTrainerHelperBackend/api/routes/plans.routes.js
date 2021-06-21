const express = require('express');
const router = express.Router();
const plans = require('../controllers/plan.controller.js');

// Get All Plans
router.get('/', plans.findAll);

// Create new Plan
router.post('/', plans.create);

// Get Plan with planId
router.get('/:planId', plans.findOne);

// Update Plan with planId
router.patch('/:planId', plans.update);

// Delete Plan with planId
router.delete('/:planId', plans.delete);

module.exports = router;