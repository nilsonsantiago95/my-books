const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Author = sequelize.define("authors", {
    name: DataTypes.STRING,
    birthPlace: DataTypes.STRING,
    dateBirth: DataTypes.STRING,
})

module.exports = Author