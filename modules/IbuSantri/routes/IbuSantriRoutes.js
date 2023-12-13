// modules/IbuSantri/routes/IbuSantriRoutes.js
const Express = require('express');
const Router = Express.Router();
const IbuSantri = require('../controllers/IbuSantriController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/ibu-santri', IbuSantri.getAllIbuSantri);
Router.get('/ibu-santri/:id', IbuSantri.getIbuSantriById);
Router.post('/ibu-santri', IbuSantri.createIbuSantri);
Router.put('/ibu-santri/:id', IbuSantri.updateIbuSantri);
Router.delete('/ibu-santri/:id', IbuSantri.deleteIbuSantri);

module.exports = Router;
