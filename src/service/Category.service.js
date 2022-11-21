const { Category } = require('../models');

const createCategory = (name) => Category.create({ name });
const getCategoryAll = () => Category.findAll();
// const getCategoryById = () => Category.findAll({ attributes: { exclude: ['name'] } });

const findCategoryById = async (categoryId) => {
    const findCategory = await Category.findByPk(categoryId);
    return findCategory;
  };
module.exports = { createCategory, getCategoryAll, findCategoryById };