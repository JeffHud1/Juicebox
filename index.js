require('dotenv').config();
const PORT = 3000;
const express = require('express');
const server = express();
const morgan = require('morgan');
const {client} = require('./db');
server.use(morgan('dev'));
server.use(express.json());

client.connect();

server.listen(PORT, ()=>{
    console.log('The server is up on port', PORT)
});


const apiRouter = require('./api');
server.use('/api', apiRouter);

server.use((req, res, next)=>{
    console.log("<____Body Logger START___>");
    console.log(req.body);
    console.log("<____Body Logger END___>");

    next();
})
