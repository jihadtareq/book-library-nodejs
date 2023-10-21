const Service = require('./service')
const BorrowingProcessRepository = require('../repositories/borrowingProcessRepository')

class BorrowingProcessService extends Service {
  constructor () {
    super(new BorrowingProcessRepository())
    this.model = 'BorrowingProcess'
  }

  async returnBook(id){
    const data = await this.repository.findByPk(id)
    if (!data) {
        throw new Error('Not Found')
    }
    if(data.dataValues.returnedDate)
    {
        throw new Error('Already has been returned')
    }

    const payload = {
      ...data.dataValues,
    }
    const returnedBook = await this.repository.returnBook(id)
    if (returnedBook == 0 ) {
        throw new Error('Can not return the book,try again')
    }
    return payload
  }
}

module.exports = BorrowingProcessService
