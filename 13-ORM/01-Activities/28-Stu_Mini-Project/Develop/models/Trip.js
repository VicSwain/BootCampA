const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        traveller_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: 'traveller',
            key: 'id',
        },
    },
        location_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'location',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'location',
    }
);

module.exports = Trip;