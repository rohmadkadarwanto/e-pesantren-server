// modules/SettingMapel/routes/SettingMapelRoutes.js
const Express = require('express');
const Router = Express.Router();
const SettingMapel = require('../controllers/SettingMapelController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/setting-mapel', SettingMapel.getAllSettingMapel);
Router.get('/setting-mapel/:id', SettingMapel.getSettingMapelById);
Router.post('/setting-mapel/create', SettingMapel.createSettingMapel);
Router.put('/setting-mapel/update/:id', SettingMapel.updateSettingMapel);
Router.delete('/setting-mapel/delete/:id', SettingMapel.deleteSettingMapel);

module.exports = Router;
