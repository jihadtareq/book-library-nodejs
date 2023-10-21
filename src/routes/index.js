const router = require('express').Router()

router.use('/books', require('./api/book'))
router.use('/borrower', require('./api/borrower'))
router.use('/borrow-process', require('./api/borrowProcess'))

module.exports = router
