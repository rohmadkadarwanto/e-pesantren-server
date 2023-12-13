// modules/SettingKelas/routes/SettingKelasRoutes.js
const Express = require('express');
const Router = Express.Router();
const SettingKelas = require('../controllers/SettingKelasController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/setting-kelas', SettingKelas.getAllSettingKelas);
Router.get('/setting-kelas/:id', SettingKelas.getSettingKelasById);
Router.post('/setting-kelas', SettingKelas.createSettingKelas);
Router.put('/setting-kelas/:id', SettingKelas.updateSettingKelas);
Router.delete('/setting-kelas/:id', SettingKelas.deleteSettingKelas);

module.exports = Router;