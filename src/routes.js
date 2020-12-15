const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({message: 'foi'})
});

routes.post('/devs', (req, res) => {
     res.json({message: 'ok'})
});

module.exports = routes;