const jwt = require('jsonwebtoken');
require('dotenv/config');
const UserService = require('../service/User.service');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const response = await UserService.getByEmail(decoded.data.email);

    if (!response) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = response;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
