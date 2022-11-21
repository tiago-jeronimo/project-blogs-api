const { PostCategory } = require('../models');

const createPostCategory = ({ postId, categoryId }) => {
    PostCategory.create({ postId, categoryId });
};

module.exports = { createPostCategory };