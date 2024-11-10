module.exports = (sequelize, DataTypes) => {
    const GameFormation = sequelize.define('GameFormation', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        puntaje: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'gameformation',
        timestamps: false
    });

    return GameFormation;
};