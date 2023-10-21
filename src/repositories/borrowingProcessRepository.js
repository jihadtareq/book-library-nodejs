const Repository = require('./baseRepositry')
const date = require('date-and-time') 
const now  =  new Date(); 

const BorrowingProcess = require('../database/models').borrowingProcess
const Book = require('../database/models').book
const Borrower = require('../database/models').borrower

class BorrowingProcessRepository extends Repository {
  constructor () {
    super()
    this.model = BorrowingProcess
  }

  //overwrite
  async findAll(options = {}){
    return await BorrowingProcess.findAll({
      include: [{
        model: Book,
        as: 'books',
        attributes: ['id', 'title']
      },
      {
        model: Borrower,
        as: 'borrowers',
        attributes: ['id', 'name']
      }]
    })
}

  async findByPk(id,options = {}){
    return await BorrowingProcess.findByPk(id,{
      include: [{
        model: Book,
        as: 'books',
        attributes: ['id', 'title']
      },
      {
        model: Borrower,
        as: 'borrowers',
        attributes: ['id', 'name']
      }]
    })
  }

  async returnBook(id){
    return await this.model.update({returnedDate:date.format(now,'YYYY-MM-DD HH:mm:ss')}, {where: { id } })
  }
}

module.exports = BorrowingProcessRepository