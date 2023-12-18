// modules/Client/routes/ClientRoutes.js
const Express = require('express');
const Router = Express.Router();
const Client = require('../controllers/ClientController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;
const upload = require('../../../utils/uploadUtils');

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/client', Client.getAllClient);
Router.get('/client/:package', Client.getClientByPackage);
Router.post('/client/create', upload.single('logo'), Client.createClient);
Router.put('/client/update/:package', upload.single('logo'), Client.updateClient);
Router.delete('/client/delete/:package', Client.deleteClient);

module.exports = Router;
