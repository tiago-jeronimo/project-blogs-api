require('dotenv/config');
const CategoryService = require('../service/Category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const addCategory = await CategoryService.createCategory(name);
    return res.status(201).json({ id: addCategory.id, name: addCategory.name });
};

module.exports = {
    createCategory,
};