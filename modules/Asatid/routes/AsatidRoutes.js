// modules/Asatid/routes/AsatidRoutes.js
const Express = require('express');
const Router = Express.Router();
const Asatid = require('../controllers/AsatidController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/asatid', Asatid.getAllAsatid);
Router.get('/asatid/:nip', Asatid.getAsatidByNip);
Router.post('/asatid/create', Asatid.createAsatid);
Router.put('/asatid/update/:nip', Asatid.updateAsatid);
Router.delete('/asatid/delete/:nip', Asatid.deleteAsatid);

module.exports = Router;
