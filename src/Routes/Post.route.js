const express = require('express');
const JWT = require('../helpers/validationJwt');

const { addPost, getAllPost } = require('../controller/Post.controller');

const router = express.Router();
router.post('/', JWT, addPost);
router.get('/', JWT, getAllPost);

module.exports = router;