const { BlogPost, Category, User } = require('../models');
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

const getById = (id) => {
    const post = BlogPost.findOne({
        where: { id },
        include: [
          { model: Category, as: 'categories', through: { attributes: [] } },
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
      });
  
      return post;
};

const updatePost = async (post, id) => {
    await BlogPost.update(post, { where: { id } });

    return getById(id);
    };

module.exports = {
    addPost,
    getAllPost,
    getById,
    updatePost,
};
