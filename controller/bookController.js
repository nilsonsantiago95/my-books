const Author = require('../models/Author')
const Book = require('../models/Book')

module.exports = {
    async store(req, res) {
        const { name, releaseDate } = req.body
        const { authorId } = req.params
        const author = await Author.findByPk(authorId)

        if(!author) return res.send("Autor não cadastrado")

        const newBook = await Book.create({name, releaseDate, authorId})
        res.json(newBook)
    },

    async index(req, res) {
        const { authorId } = req.params
        const author = Author.findByPk(authorId)

        if(!author) return res.send("Autor não cadastrado")

        const myAuthor = await Author.findByPk(authorId, {
            include: Book
        })

        res.json(myAuthor)
    }
}