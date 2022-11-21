const { PostCategory } = require('../models');

const addPostCategory = ({ postId, categoryId }) => {
  PostCategory.create({ postId, categoryId });
};

module.exports = {
  addPostCategory,
};