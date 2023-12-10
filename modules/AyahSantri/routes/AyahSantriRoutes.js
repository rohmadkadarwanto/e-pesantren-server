// modules/AyahSantri/routes/AyahSantriRoutes.js
const Express = require('express');
const Router = Express.Router();
const AyahSantri = require('../controllers/AyahSantriController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/ayah-santri', AyahSantri.getAllAyahSantri);
Router.get('/ayah-santri/:id', AyahSantri.getAyahSantriById);
Router.post('/ayah-santri', AyahSantri.createAyahSantri);
Router.put('/ayah-santri/:id', AyahSantri.updateAyahSantri);
Router.delete('/ayah-santri/:id', AyahSantri.deleteAyahSantri);

module.exports = Router;
