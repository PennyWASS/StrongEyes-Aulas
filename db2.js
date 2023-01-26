const Sequelize = require('sequelize'); //Importando a biblioteca

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite2'
})

module.exports = sequelize;