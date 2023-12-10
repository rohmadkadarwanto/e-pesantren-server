// modules/Kelas/routes/KelasRoutes.js
const Express = require('express');
const Router = Express.Router();
const Kelas = require('../controllers/KelasController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/kelas', Kelas.getAllKelas);
Router.get('/kelas/:id', Kelas.getKelasById);
Router.post('/kelas', Kelas.createKelas);
Router.put('/kelas/:id', Kelas.updateKelas);
Router.delete('/kelas/:id', Kelas.deleteKelas);

module.exports = Router;
