const Service = require('./service')
const BorrowingProcessRepository = require('../repositories/borrowingProcessRepository')

class BorrowingProcessService extends Service {
  constructor () {
    super(new BorrowingProcessRepository())
    this.model = 'BorrowingProcess'
  }
}

module.exports = BorrowingProcessService
