const express = require('express');


const server = express();

server.get('/', (req, res) => {
    res.json({message: 'foi'})
});

server.listen(3333);