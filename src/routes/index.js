const router = require('express').Router()

router.use('/books', require('./api/book'))

module.exports = router
