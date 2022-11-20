const { User } = require('../models');

const createUser = ({ displayName, password, email, image }) =>
  User.create({ displayName, password, email, image });

const getByEmail = (email) => User.findOne({ where: { email } });
const getAllUser = () => User.findAll({ attributes: { exclude: ['password'] } });
module.exports = {
  getByEmail,
  createUser,
  getAllUser,
};