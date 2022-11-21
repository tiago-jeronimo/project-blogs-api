require('dotenv/config');
const PostService = require('../service/Post.service');
const CategoryService = require('../service/Category.service');

const getCategoriesIds = async () => {
    const data = await CategoryService.getCategoriesById();
    const result = data.map((idObj) => idObj.id);
    return result;
};

const addPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const categoryIdsList = await getCategoriesIds();
    const haveIds = categoryIds.map((categoryId) => categoryIdsList.includes(categoryId));

    if (haveIds.includes(false)) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const newPost = await PostService.addPost({ title, content, userId: id, categoryIds });

    return res.status(201).json(newPost);
};
    const getAllPost = async (_req, res) => {
        const result = await PostService.getAllPost();
        return res.status(200).json(result);
    };
    const getById = async (req, res) => {
        const { id } = req.params;
        const result = await PostService.getById(Number(id));
        if (!result) {
            return res.status(404).json({ message: 'Post does not exist' });
        }
        return res.status(200).json(result);
    };

    const updatePostById = async (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;
    
        const post = await PostService.getById(id);
        
        if (!post) return res.status(400).json({ message: 'Post does not exist' });

        if (req.user !== post.userId) {
          return res.status(401).json({ message: 'Unauthorized user' });
        }
    
        const newPost = await PostService.updatePost({ title, content }, id);
    
        return res.status(200).json(newPost);
      };

module.exports = {
    addPost,
    getAllPost,
    getById,
    updatePostById,
};