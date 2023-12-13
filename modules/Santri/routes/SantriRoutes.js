// modules/Santri/routes/SantriRoutes.js
const Express = require('express');
const Router = Express.Router();
const Santri = require('../controllers/SantriController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/santri', Santri.getAllSantri);
Router.get('/santri/:id', Santri.getSantriById);
Router.get('/santri/:nis', Santri.getSantriByNis);
Router.post('/santri', Santri.createSantri);
Router.put('/santri/:id', Santri.updateSantri);
Router.delete('/santri/:id', Santri.deleteSantri);

module.exports = Router;
