const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({message: 'foi'})
});

module.exports = routes;