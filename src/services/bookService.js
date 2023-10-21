const Service = require('./service')
const BookRepository = require('../repositories/bookRepository')

class BookService extends Service {
  constructor () {
    super(new BookRepository())
    this.model = 'Book'
  }

  async searchQuery(params) {
    const data = await this.repository.searchQuery(params)

    if (!data) {
      throw new Error('Not found')
    }
    
    return data
  }
}

module.exports = BookService
