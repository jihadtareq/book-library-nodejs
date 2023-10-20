const Repository = require('./baseRepositry')

const Borrower = require('../database/models').borrower

class BookRepository extends Repository {
  constructor () {
    super()
    this.model = Borrower
  }
}

module.exports = BookRepository