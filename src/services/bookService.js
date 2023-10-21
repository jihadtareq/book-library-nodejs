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

  async updateBookQuantity(id,operator){
    const book = await this.repository.findByPk(id)
    var quantity = book.dataValues.quantity;
    if (quantity == 0 ) {
      throw new Error('This book is not available right now')
    }
    switch (operator) {
      case '+':
        quantity = quantity+1
        break;
      case '-':
        quantity = quantity-1
        break;
      default:
        throw new Error('Undefined Operator')
        break;
    }
    const payload ={
      ...book.dataValues,
    } 
    let isAvailable = (quantity == 0 ) ? false:book.dataValues.isAvailable 
    const updatedBook = await this.repository.updateBookQuantity(id,quantity,isAvailable)
    if (updatedBook == 0 ) {
      throw new Error('something goes wrong during update the quantity,try again')
    }
    return payload;

  }

}

module.exports = BookService
