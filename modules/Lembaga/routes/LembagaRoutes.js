// modules/Lembaga/routes/LembagaRoutes.js
const Express = require('express');
const Router = Express.Router();
const Lembaga = require('../controllers/LembagaController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/lembaga', Lembaga.getAllLembaga);
Router.get('/lembaga/:id', Lembaga.getLembagaById);
Router.post('/lembaga', Lembaga.createLembaga);
Router.put('/lembaga/:id', Lembaga.updateLembaga);
Router.delete('/lembaga/:id', Lembaga.deleteLembaga);

module.exports = Router;
