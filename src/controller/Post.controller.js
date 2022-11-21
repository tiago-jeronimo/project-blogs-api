// require('dotenv/config');

// const PostService = require('../service/Post.service');

// const CategoryService = require('../service/Category.service');

// const getCategoryId = async () => {
//     const data = await CategoryService.getCategoryById();
//     const map = data.map((e) => e.id);
//     return map;
// };

// const upPost = async (req, res) => {
//     const { title, content, categoryIds } = req.body;
//     const { id } = req.user;
    
//     if (!title || !content || !categoryIds) {
//         return res.status(400).json({ message: 'Some required fields are missing' });
//     }

//     const data = await getCategoryId();

//     const confirmation = categoryIds.map((e) => data.includes(e));

//     if (confirmation.includes(false)) {
//         return res.status(400).json({ message: 'one or more "categoryIds" not found' });
//     }
//     const addPost = await PostService.addNewPost({ title, content, userId: id, categoryIds });
//     return res.status(201).json(addPost);
// };

// module.exports = { upPost };

const { addPost } = require('../service/Post.service');
const { findCategoryById } = require('../service/Category.service');

const newPost = async (req, res) => {
    const { user, body } = req;
    const { categoryIds } = req.body;
    const categories = await Promise.all(categoryIds.map((id) => findCategoryById(id)));
    const invalidation = categories.some((category) => category === null);
    if (invalidation) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    const addnewPost = await addPost(body, user);

    return res.status(201).json(addnewPost);
};

module.exports = {
    newPost,
  };