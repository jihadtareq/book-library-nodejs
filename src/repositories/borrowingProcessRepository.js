const Repository = require('./baseRepositry')
const date = require('date-and-time') 
const now  =  new Date(); 

const BorrowingProcess = require('../database/models').borrowingProcess

class BorrowingProcessRepository extends Repository {
  constructor () {
    super()
    this.model = BorrowingProcess
  }

  async returnBook(id){
    return await this.model.update({returnedDate:date.format(now,'YYYY-MM-DD HH:mm:ss')}, {where: { id }})
  }
}

module.exports = BorrowingProcessRepository