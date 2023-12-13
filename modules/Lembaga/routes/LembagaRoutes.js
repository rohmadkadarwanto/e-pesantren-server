// modules/Lembaga/routes/LembagaRoutes.js
const Express = require('express');
const Router = Express.Router();
const Lembaga = require('../controllers/LembagaController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/lembaga', Lembaga.getAllLembaga);
Router.get('/lembaga/:id', Lembaga.getLembagaById);
Router.post('/lembaga', Lembaga.createLembaga);
Router.put('/lembaga/:id', Lembaga.updateLembaga);
Router.delete('/lembaga/:id', Lembaga.deleteLembaga);

module.exports = Router;
