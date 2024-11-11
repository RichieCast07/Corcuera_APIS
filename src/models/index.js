const Sequelize = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.connection = sequelize;

db.Couple = require('./couple')(sequelize, Sequelize);
db.Court = require('./court')(sequelize, Sequelize);
db.GameFormation = require('./gameformation')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;