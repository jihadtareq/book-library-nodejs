const http = require('../helpers/http')
const {OK,INTERNAL_SERVER_ERROR, NOT_FOUND,NO_CONTENT,BAD_REQUEST} = require('../helpers/constants')
const BookService = require('../services/bookService')
const BookController = module.exports

BookController.getAll = async (req, res) => {
  try {
    const book = await new BookService().findAll()
    return res.status(OK).json(http.response(book, OK, 'Book found'))
    // http.successResponse(res, OK, 'book found', book)
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Book not found'))
    // http.errorResponse(res, OK, 'book found', book)
  }
}
BookController.getBook = async (req, res) => {
  try {
    const book = await new BookService().findByPk(req.params.bookId)
    return res.status(OK).json(http.response(book, OK, 'Book found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Book not found'))
  }
}
BookController.getBookByFilter = async (req, res) => {
    try {
      const book = await new BookService().findOne({where:req.query})
      return res.status(OK).json(http.response(book, OK, 'Book found'))
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Book not found'))
    }
}
BookController.create = async (req, res) => {
  try {
    const book = await new BookService().create(req.body)
    return res.status(OK).json(http.response(book, OK, 'Book created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Book not created'))
  }
}
BookController.update = async (req, res) => {
  try {
    const book = await new BookService().update(req.params.bookId, req.body)
    return res.status(OK).json(http.response(book, OK, 'Book updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Book not updated'))
  }
}
BookController.delete = async (req, res) => {
  try {
    const book = await new BookService().remove(req.params.bookId)
    return res.status(NO_CONTENT).json(http.response(book, OK, 'Book deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Book not deleted'))
  }
}
