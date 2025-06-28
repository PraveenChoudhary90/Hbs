// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hkcybrom', 'root', 'Praveen@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;