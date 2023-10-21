const http = require('../helpers/http')
const {OK,INTERNAL_SERVER_ERROR, NOT_FOUND,NO_CONTENT,BAD_REQUEST} = require('../helpers/constants')
const BorrowerService = require('../services/borrowerService')
const BorrowerController = module.exports

BorrowerController.getAll = async (req, res) => {
  try {
    const borrowers = await new BorrowerService().findAll()
    return res.status(OK).json(http.response(borrowers, OK, 'Borrowers found'))
    // http.successResponse(res, OK, 'Borrowers found', Borrowers)
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Borrowers not found'))
    // http.errorResponse(res, OK, 'Borrowers not found', Borrowers)
  }
}
BorrowerController.getBorrower = async (req, res) => {
  try {
    const borrower = await new BorrowerService().findByPk(req.params.borrowerId)
    return res.status(OK).json(http.response(borrower, OK, 'borrower found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'borrower not found'))
  }
}
BorrowerController.getBorrowerByFilter = async (req, res) => {
    try {
      const borrower = await new BorrowerService().findOne({where:req.query})
      return res.status(OK).json(http.response(borrower, OK, 'borrower found'))
    } catch (error) {
      console.error(error)
      return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'borrower not found'))
    }
  }
BorrowerController.create = async (req, res) => {
  try {
    const borrower = await new BorrowerService().create(req.body)
    return res.status(OK).json(http.response(borrower, OK, 'Borrower created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Borrower not created'))
  }
}
BorrowerController.update = async (req, res) => {
  try {
    const borrower = await new BorrowerService().update(req.params.borrowerId, req.body)
    return res.status(OK).json(http.response(borrower, OK, 'Borrower updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Borrower not updated'))
  }
}
BorrowerController.delete = async (req, res) => {
  try {
    const borrower = await new BorrowerService().remove(req.params.borrowerId)
    return res.status(NO_CONTENT).json(http.response(borrower, OK, 'Borrower deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Borrower not deleted'))
  }
}
