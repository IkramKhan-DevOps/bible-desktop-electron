const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./database')
const router = require('./routers/bible');
const mainRouter = express.Router();

const app = express();

mainRouter.get('/', (req,res) => {
    res.render('index')
});

mainRouter.get('/page', (req,res) => {

    const search_q = req.query.search
    const book_q = req.query.book
    const chapter_q = req.query.chapter
    console.log(search_q)
    
    const sql_query = "SELECT * from bible WHERE book='"+book_q+"' OR chapter='"+chapter_q+"' OR content LIKE '%"+search_q+"%'"
    db.all(sql_query, function (err, data, fields) {
        res.render('innerpage', {'data': data})
    });
    
});


mainRouter.get('/lang', (req,res) => {
    res.render('lang')
});


mainRouter.get('/quotes', (req,res) => {
    res.render('quotes');
});


app.use(bodyParser.json());
app.use('', mainRouter);
app.use('', router);

app.use(express.static('public'))
app.use(express.static('files'))

app.set('view engine', 'ejs');

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));

/*

    -----------------------
    ::::: APPLICATION :::::
    -----------------------

    1 : 
    2 : 
    3 : 

*/