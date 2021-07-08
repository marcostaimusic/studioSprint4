const express = require('express');
const imageRoute = require('./routes/images')
const app = express();


const userRoute = require('./routes/user')
app.use('/user', userRoute)
app.use('/images', imageRoute)

module.exports = app