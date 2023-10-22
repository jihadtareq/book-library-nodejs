const Repository = require('./baseRepositry')
const { QueryTypes } = require('sequelize');
const Book = require('../database/models').book
const sequelize = require('../database/models').sequelize

class BookRepository extends Repository {
  constructor () {
    super()
    this.model = Book
  }

  //CUSTOME SEARCH
  async searchQuery (customeQuery) { 
    return await sequelize.query(`SELECT * FROM books WHERE ${customeQuery}`, { type: QueryTypes.SELECT });
  }

  async updateBookQuantity(id,quantity,isAvailable){
    return await Book.update({quantity:quantity,isAvailable:isAvailable}, { where: { id }})
  }
}

module.exports = BookRepository