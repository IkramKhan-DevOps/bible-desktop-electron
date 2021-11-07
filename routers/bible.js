const express = require("express");
const router = express.Router();
const db = require('../database')

// GET VERSES
router.get("/api/verses", (req, res)=>{
    const search_tag = req.query.search
    const query = "SELECT * from bible WHERE content LIKE '%" + search_tag + "%'";

    db.all(query, function (err, data, fields) {
        res.send(data)
    });
})

//GET BOOKS LIST
router.get("/api/book", (req, res)=>{
    const query = "SELECT Distinct(book) from bible "

    db.all(query, (err, books, fields)=>{
        res.send(books)
    })
})

//GET CHAPTERS LIST
router.get("/api/chapters/:book", (req, res)=>{
    const query = "SELECT Distinct(chapter) from bible WHERE book='"+req.params.book+"' ";

    db.all(query, (err, chapters, fields)=>{
        res.send(chapters)
    })
})

module.exports = router;