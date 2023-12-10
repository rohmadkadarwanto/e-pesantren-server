// modules/Client/routes/ClientRoutes.js
const Express = require('express');
const Router = Express.Router();
const Client = require('../controllers/ClientController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/client', Client.getAllClient);
Router.get('/client/:id', Client.getClientById);
Router.post('/client', Client.createClient);
Router.put('/client/:id', Client.updateClient);
Router.delete('/client/:id', Client.deleteClient);

module.exports = Router;
