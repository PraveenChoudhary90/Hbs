// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const students = sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rollno: {
        type: DataTypes.INTEGER,
        
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING
    },
    fees: {
        type: DataTypes.INTEGER
    },
    
        // timestamps: false  // optional: removes createdAt/updatedAt fields
    
    });

module.exports = students;