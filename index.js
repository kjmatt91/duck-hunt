const express = require('express')
const app = express()
const scores = require('./scores')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {scores})
})

app.listen(1338, () => {
    console.log('Listening on 1338 :)')
})