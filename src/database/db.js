const Sequelize = require('sequelize');
const cfg = require('../modules/config').db;

const sequelize = new Sequelize(cfg.database, cfg.user, cfg.password, {
    dialect: "mysql",
    host: cfg.host,
});

const list_ban = require('./list_ban')(sequelize);
const list_mute = require('./list_mute')(sequelize);
const list_warn = require('./list_warn')(sequelize);

const log_admin = require('./log_admin')(sequelize);
const log_any = require('./log_any')(sequelize);
const log_system = require('./log_system')(sequelize);
const log_user = require('./log_user')(sequelize);

module.exports = {
    sequelize: sequelize,

    // Данные
    list_ban: list_ban,
    list_mute: list_mute,
    list_warn: list_warn,

    // Логи
    log_admin: log_admin,
    log_any: log_any,
    log_system: log_system,
    log_user: log_user,
};