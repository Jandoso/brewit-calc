const express = require('express');

const estilosController = require('./controllers/EstilosController');

const routes = express.Router();

routes.get('/', estilosController.get);

module.exports = routes; 

