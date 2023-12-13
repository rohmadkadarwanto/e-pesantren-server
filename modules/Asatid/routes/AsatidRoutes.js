// modules/Asatid/routes/AsatidRoutes.js
const Express = require('express');
const Router = Express.Router();
const Asatid = require('../controllers/AsatidController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/asatid', Asatid.getAllAsatid);
Router.get('/asatid/:id', Asatid.getAsatidById);
Router.post('/asatid', Asatid.createAsatid);
Router.put('/asatid/:id', Asatid.updateAsatid);
Router.delete('/asatid/:id', Asatid.deleteAsatid);

module.exports = Router;
