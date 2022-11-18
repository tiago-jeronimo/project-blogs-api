const express = require('express');
const User = require('../controller/User.contoller');

const router = express.Router();

router.post('/', User.createUser);

module.exports = router;