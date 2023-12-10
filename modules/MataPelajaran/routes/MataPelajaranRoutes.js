// modules/MataPelajaran/routes/MataPelajaranRoutes.js
const Express = require('express');
const Router = Express.Router();
const MataPelajaran = require('../controllers/MataPelajaranController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/mata-pelajaran', MataPelajaran.getAllMataPelajaran);
Router.get('/mata-pelajaran/:id', MataPelajaran.getMataPelajaranById);
Router.post('/mata-pelajaran', MataPelajaran.createMataPelajaran);
Router.put('/mata-pelajaran/:id', MataPelajaran.updateMataPelajaran);
Router.delete('/mata-pelajaran/:id', MataPelajaran.deleteMataPelajaran);

module.exports = Router;
