require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../service/User.service');

const keySecret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const loginControler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UserService.getByUserName(email);
    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const config = {
        algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id, email } },
         keySecret, config);
         res.status(200).json({ token });
};

module.exports = loginControler;