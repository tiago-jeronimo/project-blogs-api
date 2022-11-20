const express = require('express');
const User = require('../controller/User.contoller');
const JWT = require('../helpers/validationJwt');

const router = express.Router();

router.post('/', User.createUser);
router.get('/', JWT, User.getAllUser);

module.exports = router;