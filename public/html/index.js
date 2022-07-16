var express = require('express');
var path = require('path');
var logger = require('morgan');
var db = require('../../models/data-model')

var app = express();

// App config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './index.html'))
})

app.get('/addperson/info', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './infoofperson.html'))
})

app.get('/addperson/added', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './personadded.html'))
})

app.get('/inprogress', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './inprogress.html'))
})

app.post('/addperson/add', (req, res) => {
    db.insertPerson(req.body.fname, req.body.lname, req.body.age, req.body.desc)
    res.status(200).sendFile(path.join(__dirname, './personadded.html'))
})

app.get('/play', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './playmenu.html'))
})

app.get('/play/play', (req, res) => {
    db.getInfo()
    res.status(200).sendFile(path.join(__dirname, './play.html'))
})

app.get('/favicon.ico', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/images/icon.png'))
})

// 404
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/html/404.html'))
})

// Puts it on the localhost
app.listen(5000, () => {
    console.log('listening on localhost:5000')
})