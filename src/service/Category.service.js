const { Category } = require('../models');

const createCategory = (name) => Category.create({ name });
const getCategoryAll = () => Category.findAll();

module.exports = { createCategory, getCategoryAll };