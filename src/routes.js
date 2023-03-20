const express = require('express')
const authorController = require('../controller/authorController')
const bookController = require('../controller/bookController')

const router = express.Router()

router.post('/authors', authorController.store)
router.get('/authors', authorController.index)
router.put('/authors/:id', authorController.put)
router.delete('/authors/:id', authorController.delete)

router.post('/author/:authorId/books', bookController.store)
router.get('/author/:authorId/books', bookController.index)

module.exports = router