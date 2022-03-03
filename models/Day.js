const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Day extends Model {}

Day.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.ENUM("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"),
            allowNull: false,
        },
        plan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal_plan',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'day',
    }
);

module.exports = Day;