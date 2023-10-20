const express = require("express");
const booksController = require('../../controllers/bookController');
const router = express.Router();

    
    router.get("/", booksController.getAll);
    router.get("/search-book", booksController.getBookByFilter);
    router.get("/:bookId", booksController.getBook);
    router.post("/", booksController.create);
    router.put("/:bookId", booksController.update);
    router.delete("/:bookId", booksController.delete);
    // router.delete("/delete-all", booksController.deleteAll);
 

module.exports = router