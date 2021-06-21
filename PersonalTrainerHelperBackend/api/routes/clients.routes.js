const express = require('express');
const clients = require("../controllers/client.controller.js");
const router = express.Router();

router.get('/', clients.findAll);

router.post('/', clients.create);

router.get('/:clientId', clients.findOne);

router.patch('/:clientId', clients.update);

router.delete('/:clientId', clients.delete);

module.exports = router;