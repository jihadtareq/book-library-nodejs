const Repository = require('./baseRepositry')

const BorrowerProcess = require('../database/models').borrowingProcess

class BorrowingProcessRepository extends Repository {
  constructor () {
    super()
    this.model = BorrowerProcess
  }
}

module.exports = BorrowingProcessRepository