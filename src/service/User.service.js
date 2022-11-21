const { User } = require('../models');

const createUser = ({ displayName, password, email, image }) =>
  User.create({ displayName, password, email, image });

const getByEmail = (email) => User.findOne({ where: { email } });
const getAllUser = () => User.findAll({ attributes: { exclude: ['password'] } });
const getById = (id) => User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
const deleteUser = async (id) => {
 await User.destroy({ where: { id } });
};

module.exports = {
  getByEmail,
  createUser,
  getAllUser,
  getById,
  deleteUser,
};