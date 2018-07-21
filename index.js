const express = require('express')
const app = express()
//configura o ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'))

app.listen(process.env.PORT || 5000)