const express = require('express')

const app = express()

app.listen(3000)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('main', { title: 'Home' })
})

app.get('/contact-me', (req, res) => {
    res.render('contact-me', { title: 'Contact-Me' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})


app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})