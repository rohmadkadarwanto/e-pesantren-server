// modules/Santri/routes/SantriRoutes.js
const Express = require('express');
const Router = Express.Router();
const Santri = require('../controllers/SantriController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/santri', Santri.getAllSantri);
Router.get('/santri/:nis', Santri.getSantriByNis);
Router.post('/santri/create', Santri.createSantri);
Router.put('/santri/update/:nis', Santri.updateSantri);
Router.delete('/santri/delete/:nis', Santri.deleteSantri);

module.exports = Router;
