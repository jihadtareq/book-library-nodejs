const express = require("express");
const borrowerController = require('../../controllers/borrowerController');
const router = express.Router();

    
    router.get("/", borrowerController.getAll);
    router.get("/:borrowerId", borrowerController.getBorrower);
    router.get("/search-borrower", borrowerController.getBorrowerByFilter);
    router.post("/", borrowerController.create);
    router.put("/:borrowerId", borrowerController.update);
    router.delete("/:borrowerId", borrowerController.delete); 

module.exports = router