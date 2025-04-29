const express = require('express');
const { addContact } = require('../controllers/contactController');

const router = express.Router();

router.post('/contacts', addContact);

module.exports = router;
