// modules/Kelas/routes/KelasRoutes.js
const Express = require('express');
const Router = Express.Router();
const Kelas = require('../controllers/KelasController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/kelas', Kelas.getAllKelas);
Router.get('/kelas/:id', Kelas.getKelasById);
Router.post('/kelas/create', Kelas.createKelas);
Router.put('/kelas/update/:id', Kelas.updateKelas);
Router.delete('/kelas/delete/:id', Kelas.deleteKelas);

module.exports = Router;
