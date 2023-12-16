// modules/Client/routes/ClientRoutes.js
const Express = require('express');
const Router = Express.Router();
const Client = require('../controllers/ClientController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/client', Client.getAllClient);
Router.get('/client/:package', Client.getClientByPackage);
Router.post('/client/create', Client.createClient);
Router.put('/client/update/:package', Client.updateClient);
Router.delete('/client/delete/:package', Client.deleteClient);

module.exports = Router;
