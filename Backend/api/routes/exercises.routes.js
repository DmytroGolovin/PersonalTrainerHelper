const express = require('express');
const router = express.Router();
const exercise = require('../controllers/plan.controller.js');

// Get All exercises
router.get('/', exercise.findAll);

// Create new exercise
router.post('/', exercise.create);

// Get exercise with exerciseId
router.get('/:exerciseId', exercise.findOne);

// Update exercise with exerciseId
router.patch('/:exerciseId', exercise.update);

// Delete exercise with exerciseId
router.delete('/:exerciseId', exercise.delete);

module.exports = router;