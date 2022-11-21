const { BlogPost } = require('../models');
const PostCategoryService = require('./PostCategory.service');

const addPost = async ({ title, content, userId, categoryIds }) => {
    const result = await BlogPost.create({ title, content, userId });
    categoryIds.forEach(async (categoryId) =>
        PostCategoryService.addPostCategory({ postId: result.id, categoryId }));
    return result;
};

module.exports = {
    addPost,
};
