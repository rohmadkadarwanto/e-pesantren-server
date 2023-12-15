// modules/MataPelajaran/routes/MataPelajaranRoutes.js
const Express = require('express');
const Router = Express.Router();
const LaporanRoutes = require('../controllers/LaporanController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.use('/laporan', LaporanRoutes.getLaporan);

module.exports = Router;
