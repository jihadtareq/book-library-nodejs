const Repository = require('./baseRepositry')

const Book = require('../database/models').book

class BookRepository extends Repository {
  constructor () {
    super()
    this.model = Book
  }
}

module.exports = BookRepository