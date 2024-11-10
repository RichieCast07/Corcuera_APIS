module.exports = (sequelize, DataTypes) => {
    const Court = sequelize.define('Court', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamano: {
            type: DataTypes.STRING,
            allowNull: false
        },
        disponibilidad: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Disponible'
        }
    }, {
        tableName: 'courts',
        timestamps: false
    });

    return Court;
};
