const Service = require('./service')
const BorrowingProcessRepository = require('../repositories/borrowingProcessRepository')

class BorrowingProcessService extends Service {
  constructor () {
    super(new BorrowingProcessRepository())
    this.model = 'BorrowingProcess'
  }

  async returnBook(id){
    const data = await this.repository.returnBook(id)
    if (data == 0 ) {
      throw new Error('Can not return the book,try again')
    }

    return data
  }
}

module.exports = BorrowingProcessService
