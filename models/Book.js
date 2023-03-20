const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Book = sequelize.define("books", {
    name: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    authorId: DataTypes.INTEGER
})

module.exports = Book