const express = require('express');
const JWT = require('../helpers/validationJwt');
const CategoryController = require('../controller/Category.controller');

const router = express.Router();

router.post('/', JWT, CategoryController.createCategory);
router.get('/', JWT, CategoryController.getCategoryAll);

module.exports = router;