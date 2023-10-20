const Service = require('./service')
const BorrowerRepository = require('../repositories/borrowerRepository')

class BorrowerService extends Service {
  constructor () {
    super(new BorrowerRepository())
    this.model = 'Borrower'
  }
}

module.exports = BorrowerService
