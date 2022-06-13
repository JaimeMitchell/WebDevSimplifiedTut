const express = require('express')
const router = express.Router()
const Author = require('../models/authors')

//all authors route the index view
router.get('/', (req, res) => {
    res.render('authors/index')
})

//new authors route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

//create author route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router