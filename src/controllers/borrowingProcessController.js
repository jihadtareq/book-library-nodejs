const http = require('../helpers/http')
const {OK,INTERNAL_SERVER_ERROR, NOT_FOUND,NO_CONTENT,BAD_REQUEST} = require('../helpers/constants')
const BorrowingProcessService = require('../services/borrowingProcessService')
const BookService = require('../services/bookService')
const BorrowingProcessController = module.exports

BorrowingProcessController.getAll = async (req, res) => {
    try {
      const borrowers = await new BorrowingProcessService().findAll()
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
        const checkoutBook = await new BorrowingProcessService().create(req.body)
        await new BookService().updateBookQuantity(checkoutBook.bookId,'-')
        return res.status(OK).json(http.response(checkoutBook,OK,'Book has been checked out'))
        
    } catch (error) {
        console.error(error)
        return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Process of borrowing not found'))
    }
}

BorrowingProcessController.getBorrowProcessing = async (req, res) => {
    try {
      const process = await new BorrowingProcessService().findByPk(req.params.borrowProcessId)
      return res.status(OK).json(http.response(process, OK, 'process found'))
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'process not found'))
    }
}

BorrowingProcessController.update = async (req, res) => {
    try {
      const borrowingProcess = await new BorrowingProcessService().update(req.params.borrowProcessId, req.body)
      return res.status(OK).json(http.response(borrowingProcess, OK, 'Borrowing process updated'))
    } catch (error) {
      console.error(error)
      return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Borrowing process not updated'))
    }
}

BorrowingProcessController.delete = async (req, res) => {
    try {
      const borrowingProcess = await new BorrowingProcessService().remove(req.params.borrowProcessId)
      return res.status(OK).json(http.response(borrowingProcess, OK, 'Borrowing process deleted'))
    } catch (error) {
      console.error(error)
      return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Borrowing process not deleted'))
    }
}

BorrowingProcessController.returnBook = async (req,res) =>{
    try {
        const returnBook = await new BorrowingProcessService().returnBook(req.params.borrowProcessId)
        await new BookService().updateBookQuantity(returnBook.books.id,'+')
        return res.status(OK).json(http.response(returnBook,OK,`Book has been returned`))
    } catch (error) {
        return res.status(NOT_FOUND).json(http.response(error.message, NOT_FOUND, 'Error'))
    }
}

BorrowingProcessController.getBorrowProcessesBySearch = async (req, res) => {
    try {
      const processOfBorrowing = await new BorrowingProcessService().getProcessesBySearch(req.query)
      return res.status(OK).json(http.response(processOfBorrowing, OK, 'borrowing process found'))
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'borrowing process not found'))
    }
}

