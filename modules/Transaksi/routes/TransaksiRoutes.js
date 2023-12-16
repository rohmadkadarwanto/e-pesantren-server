// modules/Transaksi/routes/TransaksiRoutes.js
const Express = require('express');
const Router = Express.Router();
const Transaksi = require('../controllers/TransaksiController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/transaksi/laporan', Transaksi.getAllTransaksi);
Router.get('/transaksi/:code', Transaksi.getTransaksiByCode);
Router.post('/transaksi/create', Transaksi.createTransaksi);
Router.put('/transaksi/update/:code', Transaksi.updateTransaksi);
Router.delete('/transaksi/delete/:code', Transaksi.deleteTransaksi);
module.exports = Router;
