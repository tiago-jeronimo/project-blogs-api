const express = require('express');
const JWT = require('../helpers/validationJwt');

const { addPost } = require('../controller/Post.controller');

const router = express.Router();
router.post('/', JWT, addPost);

module.exports = router;