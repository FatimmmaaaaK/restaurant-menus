const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: '/Users/fatoumata.kaba/restaurant-menus/db.sqlite'
})

module.exports = {
    sequelize
};
