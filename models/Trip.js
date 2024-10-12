const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Trip = sequelize.define('Trip', {
    trip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    trip_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    trip_budget: {
        type: DataTypes.FLOAT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

});

User.hasMany(Trip, { foreignKey: 'user_id' });
Trip.belongsTo(User, { foreignKey: 'user_id' });


module.exports = Trip;
