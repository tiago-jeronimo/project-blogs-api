const express = require('express');
const JWT = require('../helpers/validationJwt');
const { valitationUp } = require('../helpers/valitationUp');

const { addPost, getAllPost, getById, updatePostById } = require('../controller/Post.controller');

const router = express.Router();
router.post('/', JWT, addPost);
router.get('/', JWT, getAllPost);
router.get('/:id', JWT, getById);
router.put('/:id', JWT, valitationUp, updatePostById);

module.exports = router;