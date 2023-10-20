const Service = require('./service')
const BookRepository = require('../repositories/bookRepository')

class BookService extends Service {
  constructor () {
    super(new BookRepository())
    this.model = 'Book'
  }
}

module.exports = BookService
