const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const User = require('../service/User.service');

const validationEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const validation = async (displayName, email, password) => {
    if (displayName.length < 8) {
        return { status: 400, message: '"displayName" length must be at least 8 characters long' };
    }
    if (!validationEmail(email)) {
        return { status: 400, message: '"email" must be a valid email' };
    } 
    if (password.length < 6) {
        return { status: 400, message: '"password" length must be at least 6 characters long' };
    }
    const user = await User.getByEmail(email);
    if (user) {
        return { status: 409, message: 'User already registered' };
      }
      return false;
}; 

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const erro = await validation(displayName, email, password);
    if (erro) {
        return res.status(erro.status).json({ message: erro.message });
    }
    await User.createUser({ displayName, password, email, image });
    const jwtConfig = { algorithm: 'HS256' };

    const newUser = await User.getByEmail(email);

    const token = jwt.sign({ data: { userId: newUser.id, email } }, secret, jwtConfig);

    res.status(201).json({ token });
};

const getAllUser = async (req, res) => {
    const data = await User.getAllUser();
    res.status(200).json(data);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const data = await User.getById(Number(id));
    if (!data) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(data);
};

const deleteUser = async (req, res) => {
    await User.deleteUser(req.user.id);
    // console.log(req.user);
    res.status(204).send();
  };

module.exports = {
    createUser,
    getAllUser,
    getById,
    deleteUser,
  };