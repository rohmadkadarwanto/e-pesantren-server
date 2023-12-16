// modules/MataPelajaran/routes/MataPelajaranRoutes.js
const Express = require('express');
const Router = Express.Router();
const MataPelajaran = require('../controllers/MataPelajaranController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/mata-pelajaran', MataPelajaran.getAllMataPelajaran);
Router.get('/mata-pelajaran/:code', MataPelajaran.getMataPelajaranByCode);
Router.post('/mata-pelajaran/create', MataPelajaran.createMataPelajaran);
Router.put('/mata-pelajaran/update/:code', MataPelajaran.updateMataPelajaran);
Router.delete('/mata-pelajaran/delete/:code', MataPelajaran.deleteMataPelajaran);

module.exports = Router;
