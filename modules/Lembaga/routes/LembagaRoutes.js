// modules/Lembaga/routes/LembagaRoutes.js
const Express = require('express');
const Router = Express.Router();
const Lembaga = require('../controllers/LembagaController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/lembaga', Lembaga.getAllLembaga);
Router.get('/lembaga/:code', Lembaga.getLembagaByCode);
Router.post('/lembaga/create', Lembaga.createLembaga);
Router.put('/lembaga/update/:code', Lembaga.updateLembaga);
Router.delete('/lembaga/delete/:code', Lembaga.deleteLembaga);

module.exports = Router;
