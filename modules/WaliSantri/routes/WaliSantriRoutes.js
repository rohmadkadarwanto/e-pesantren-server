// modules/WaliSantri/routes/WaliSantriRoutes.js
const Express = require('express');
const Router = Express.Router();
const WaliSantri = require('../controllers/WaliSantriController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/wali-santri', WaliSantri.getAllWaliSantri);
Router.get('/wali-santri/:id', WaliSantri.getWaliSantriById);
Router.post('/wali-santri', WaliSantri.createWaliSantri);
Router.put('/wali-santri/:id', WaliSantri.updateWaliSantri);
Router.delete('/wali-santri/:id', WaliSantri.deleteWaliSantri);

module.exports = Router;
