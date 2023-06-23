const Author = require('../models/Author')
const Book = require('../models/Book')

Author.hasMany(Book, {onUpdate: "CASCADE", onDelete: "CASCADE"})
Book.belongsTo(Author, {onUpdate: "CASCADE", onDelete: "CASCADE"})

module.exports = { Author, Book }