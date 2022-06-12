if (process.env.NODE_ENV !== "production") {
    require('dotenv').load()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routers/index')
const authorsRouter = require('./routers/authors')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
//stylesheets, imgs
app.use(express.static('public'))

// Set up mongoose 
const mongoose = require('mongoose')
//connects to .env file's DATABASE_URL=mongodb://localhost/mybrary
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
// will only connect and run once
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/', indexRouter)
app.use('/authors', authorsRouter)

app.listen(process.env.PORT || 3000)