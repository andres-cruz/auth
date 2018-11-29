// Require
const express = require('express');
const mongoose = require('mongoose');

// DB
mongoose.connect('mongodb://localhost/auth_demo');

// Setup
const app = express();
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/secret', (req, res) => {
    res.render('secret');
});


app.listen(3000, () => {
    console.log('Server started...');
});
