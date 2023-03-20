const Author = require('../models/Author')

module.exports = {
    async store(req, res) {
        try {
            const { name, birthPlace, dateBirth } = req.body
            const newAuthor = await Author.create({name, birthPlace, dateBirth})
            res.json(newAuthor)
        } catch (error) {
            res.send(error.message)
        }
    },

    async index(req, res) {
        try {
            const authors = await Author.findAll()
            res.json(authors)
        } catch (error) {
            res.send(error.message)
        }
    },

    async put(req, res) {
        try {
            const { name, birthPlace, dateBirth } = req.body
            await Author.update({name, birthPlace, dateBirth}, {
                where:{
                    id: req.params.id
                }
            })

            res.send("Autor atualizado")
        } catch (error) {
            res.send(error.message)
        }
    },

    async delete(req, res) {
        try {
            await Author.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send("Autor removido")
        } catch (error) {
            res.send(error.message)
        }
    }
}