// modules/SettingMapel/routes/SettingMapelRoutes.js
const Express = require('express');
const Router = Express.Router();
const SettingMapel = require('../controllers/SettingMapelController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/setting-mapel', SettingMapel.getAllSettingMapel);
Router.get('/setting-mapel/:id', SettingMapel.getSettingMapelById);
Router.post('/setting-mapel', SettingMapel.createSettingMapel);
Router.put('/setting-mapel/:id', SettingMapel.updateSettingMapel);
Router.delete('/setting-mapel/:id', SettingMapel.deleteSettingMapel);

module.exports = Router;
