const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var sqlite3 = require('sqlite3').verbose()


router.get('/', (req,res) => {
    let db = new sqlite3.Database('db.db')
    db.all("SELECT * FROM bible LIMIT 10", function (err, data, fields) {
        res.render('index', {
            "data": data
        });
    });
});


router.get('/page', (req,res) => {
    let db = new sqlite3.Database('db.db')
    db.all("SELECT * FROM bible LIMIT 10", function (err, data, fields) {
        res.render('innerpage', {
            "data": data
        });
    });
});


router.get('/lang', (req,res) => {
    res.render('lang');
});


router.get('/quotes', (req,res) => {
    res.render('quotes');
});


app.use('/', router);
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('files'))


app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));