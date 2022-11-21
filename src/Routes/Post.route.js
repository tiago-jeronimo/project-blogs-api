const express = require('express');
const JWT = require('../helpers/validationJwt');

const { addPost, getAllPost, getById } = require('../controller/Post.controller');

const router = express.Router();
router.post('/', JWT, addPost);
router.get('/', JWT, getAllPost);
router.get('/:id', JWT, getById);

module.exports = router;