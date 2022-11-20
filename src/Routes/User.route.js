const express = require('express');
const User = require('../controller/User.contoller');
const JWT = require('../helpers/validationJwt');

const router = express.Router();

router.post('/', User.createUser);
router.get('/', JWT, User.getAllUser);
router.get('/:id', JWT, User.getById);
module.exports = router;