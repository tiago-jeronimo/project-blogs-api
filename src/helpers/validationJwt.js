require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../service/User.service');

const worldSecret = process.env.JWT_SECRET || 'suaSenhaSecreta';

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
         }

    try {
        const decoded = jwt.verify(token, worldSecret);
        const response = await UserService.getByEmail(decoded.data.email);

        if (!response) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        req.response = response;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
