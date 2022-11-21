const express = require('express');

const { newPost } = require('../controller/Post.controller'); 
const JWT = require('../helpers/validationJwt');
const { postValidation } = require('../helpers/validationPost');

const router = express.Router();
router.post('/:id', JWT, postValidation, newPost);

module.exports = router;