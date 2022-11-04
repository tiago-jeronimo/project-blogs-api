const { User } = require('../models');

const createUser = ({ displayName, password }) => User.create({ displayName, password });

createUser({ displayName: 'Anderson', password: '123456' });

const getByUserName = (email) => User.findOne({ where: { email } });

module.exports = {
    getByUserName,
    createUser,
 };