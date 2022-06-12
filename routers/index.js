const express = require('express')
const router = express.Router()

//renders the index view
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router