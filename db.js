const Sequelize = require('sequelize'); //Importando a biblioteca

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = sequelize;