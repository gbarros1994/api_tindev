const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://gbarros1994:gbarros1994@cluster0.lyyse.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


server.use(routes);

server.listen(3333);