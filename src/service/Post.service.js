const { BlogPost } = require('../models');
const PostCategoryService = require('./PostCategory.service');

const addPost = async ({ title, content, userId, categoryIds }) => {
    const result = await BlogPost.create({ title, content, userId });
    categoryIds.forEach(async (categoryId) =>
        PostCategoryService.addPostCategory({ postId: result.id, categoryId }));
    return result;
};

const getAllPost = () => BlogPost.findAll({
    include: { all: true, attributes: { exclude: ['password'] } },
    attributes: { exclude: ['user_id'] },
});

const getById = (id) => BlogPost.findOne({
    where: { id },
    include: { all: true, attributes: { exclude: ['password'] } },
    attributes: { exclude: ['user_id'] } });

module.exports = {
    addPost,
    getAllPost,
    getById,
};
