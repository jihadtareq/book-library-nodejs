const Repository = require('./baseRepositry')

const BorrowingProcess = require('../database/models').borrowingProcess

class BorrowingProcessRepository extends Repository {
  constructor () {
    super()
    this.model = BorrowingProcess
  }
}

module.exports = BorrowingProcessRepository