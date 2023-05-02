const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

mongoose.connect(config.db.url, {
    
})