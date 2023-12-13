// modules/Client/routes/ClientRoutes.js
const Express = require('express');
const Router = Express.Router();
const Client = require('../controllers/ClientController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/client', Client.getAllClient);
Router.get('/client/:id', Client.getClientById);
Router.get('/client/:app', Client.getClientByApp);
Router.post('/client', Client.createClient);
Router.put('/client/:id', Client.updateClient);
Router.delete('/client/:id', Client.deleteClient);

module.exports = Router;
