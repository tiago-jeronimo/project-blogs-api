const { Category } = require('../models');

const createCategory = (name) => Category.create({ name });
const getCategoryAll = () => Category.findAll();
const getCategoriesById = () => Category.findAll({
  attributes: { exclude: ['name'] },
});
module.exports = { createCategory, getCategoryAll, getCategoriesById };