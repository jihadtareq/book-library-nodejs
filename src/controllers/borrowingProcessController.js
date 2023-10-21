const http = require('../helpers/http')
const {OK,INTERNAL_SERVER_ERROR, NOT_FOUND,NO_CONTENT,BAD_REQUEST} = require('../helpers/constants')
const BorroweringProcessService = require('../services/borrowingProcessService')
const BorrowingProcessController = module.exports

BorrowingProcessController.getAll = async (req, res) => {
    try {
      const borrowers = await new BorroweringProcessService().findAll()
      return res.status(OK).json(http.response(borrowers, OK, 'Process of borrowing found'))
      // http.successResponse(res, OK, 'Process of borrowing found', Process of borrowing)
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Process of borrowing not found'))
      // http.errorResponse(res, OK, 'Process of borrowing not found', Process of borrowing)
    }
  }
BorrowingProcessController.borrowBook = async (req,res) =>{
    try {
        const checkoutBook = await new BorroweringProcessService().create(req.body)
        return res.status(OK).json(http.response(checkoutBook,OK,`Book has been checked out by ${checkoutBook.userName}`))
        
    } catch (error) {
        console.error(error)
        return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Process of borrowing not found'))
    }
}

BorrowingProcessController.getBorrowProcessing = async (req, res) => {
    try {
      const borrower = await new BorroweringProcessService().findByPk(req.params.borrowProcessId)
      return res.status(OK).json(http.response(borrower, OK, 'borrower found'))
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'borrower not found'))
    }
}

BorrowingProcessController.update = async (req, res) => {
    try {
      const borrower = await new BorroweringProcessService().update(req.params.borrowProcessId, req.body)
      return res.status(OK).json(http.response(borrower, OK, 'Borrowing process updated'))
    } catch (error) {
      console.error(error)
      return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Borrowing process not updated'))
    }
}

BorrowingProcessController.delete = async (req, res) => {
    try {
      const borrower = await new BorroweringProcessService().remove(req.params.borrowProcessId)
      return res.status(OK).json(http.response(borrower, OK, 'Borrowing process deleted'))
    } catch (error) {
      console.error(error)
      return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Borrowing process not deleted'))
    }
}

BorrowingProcessController.returnBook = async (req,res) =>{
    try {
        const checkoutBook = await new BorroweringProcessService().returnBook(req.params.borrowProcessId)
        return res.status(OK).json(http.response({},OK,`Book has been returned`))
    } catch (error) {
        return res.status(NOT_FOUND).json(http.response(error.message, NOT_FOUND, 'Error'))
    }
}

