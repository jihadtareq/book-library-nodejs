const router = require('express').Router()

router.use('/books', require('./api/book'))
router.use('/borrower', require('./api/borrower'))

module.exports = router
