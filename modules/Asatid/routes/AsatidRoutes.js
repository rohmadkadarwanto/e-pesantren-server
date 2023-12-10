// modules/Asatid/routes/AsatidRoutes.js
const Express = require('express');
const Router = Express.Router();
const Asatid = require('../controllers/AsatidController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/asatid', Asatid.getAllAsatid);
Router.get('/asatid/:id', Asatid.getAsatidById);
Router.post('/asatid', Asatid.createAsatid);
Router.put('/asatid/:id', Asatid.updateAsatid);
Router.delete('/asatid/:id', Asatid.deleteAsatid);

module.exports = Router;
