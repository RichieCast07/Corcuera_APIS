// models/couple.js
module.exports = (sequelize, DataTypes) => {
    const Couple = sequelize.define('Couple', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        padelista1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        padelista2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cancha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'couples',
        timestamps: false
    });

    return Couple;
};
