// modules/Transaksi/routes/TransaksiRoutes.js
const Express = require('express');
const Router = Express.Router();
const Transaksi = require('../controllers/TransaksiController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/transaksi/laporan', Transaksi.getAllTransaksi);
Router.get('/transaksi/:id', Transaksi.getTransaksiById);
Router.post('/transaksi/create', Transaksi.createTransaksi);
Router.put('/transaksi/update/:id', Transaksi.updateTransaksi);
Router.delete('/transaksi/delete/:id', Transaksi.deleteTransaksi);
module.exports = Router;
