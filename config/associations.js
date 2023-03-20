const Author = require('../models/Author')
const Book = require('../models/Book')

Author.hasOne(Book, {onUpdate: "CASCADE", onDelete: "CASCADE"})
Book.belongsTo(Author, {foreingKey: "authorId", as: "authors"})

module.exports = { Author, Book }