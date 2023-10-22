const Repository = require('./baseRepositry')
const { QueryTypes } = require('sequelize');
const BorrowingProcess = require('../database/models').borrowingProcess
const Book = require('../database/models').book
const Borrower = require('../database/models').borrower
const sequelize = require('../database/models').sequelize

const date = require('date-and-time') 
const now  =  new Date(); 

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

    //CUSTOME SEARCH
  async searchQuery (customeQuery) { 
    return await sequelize.query(`SELECT * FROM borrowing_processes WHERE ${customeQuery}`, { type: QueryTypes.SELECT });
  }
  async getProcessesNotOverDueDateYet () { 
    return await sequelize.query('SELECT * FROM borrowing_processes WHERE is_over_due = false', { type: QueryTypes.SELECT });
  }
}

module.exports = BorrowingProcessRepository