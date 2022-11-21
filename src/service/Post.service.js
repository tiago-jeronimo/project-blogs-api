// const { BlogPost } = require('../models');

// const ServicePostCategory = require('./PostCategory.service');

// const createPost = async ({ title, content, userId, categoryIds }) => {
//     const data = await BlogPost.create({ title, content, userId });

//     categoryIds.forEach(async (categoryId) => {
//         ServicePostCategory.createPostCategory({ postId: data.id, categoryId });
//     });
//     return data;
// };

// module.exports = { createPost };

const { BlogPost, PostCategory } = require('../models');

const createCategory = async (postId, categoryId) => {
    const postCategory = await PostCategory.create({ postId, categoryId });
    return postCategory;
};

const addPost = async (userId, post) => {
    const { title, content, categoryIds } = post;
    const { dataValues: { id, updated, published } } = await BlogPost.create({ 
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(), 
    });
    await Promise.all(categoryIds.map((e) => createCategory(id, e)));
    const data = { id, title, content, userId, published, updated };
    return data;
};

module.exports = { addPost };