const express = require("express");
const borrowProcessController = require('../../controllers/borrowingProcessController');
const router = express.Router(); 

router.get("/", borrowProcessController.getAll);
router.get("/:borrowProcessId", borrowProcessController.getBorrowProcessing);
// router.get("/search-borrower", borrowProcessController.getBorrowerByFilter);
router.post("/", borrowProcessController.borrowBook);
router.put("/:borrowProcessId", borrowProcessController.update);
router.delete("/:borrowProcessId", borrowProcessController.delete); 

module.exports = router