const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const Review = sequelize.define('Review', {
    id_review: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stars: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_food: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports.Review = Review;