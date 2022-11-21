const PostService = require('../service/Post.service');

const valitationUp = async (req, res, next) => {
  const { id } = req.params;

  const result = await PostService.getById(Number(id));

    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        message: 'Some required fields are missing',
      });
    }
      if (req.user.id !== result.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
      }
  
    next();
  };
  
  module.exports = { valitationUp };