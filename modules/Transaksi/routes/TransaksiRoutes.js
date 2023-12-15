// modules/Transaksi/routes/TransaksiRoutes.js
const Express = require('express');
const Router = Express.Router();
const Transaksi = require('../controllers/TransaksiController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/transaksi', Transaksi.getAllTransaksi);
Router.get('/transaksi/:id', Transaksi.getTransaksiById);
Router.post('/transaksi', Transaksi.createTransaksi);
Router.put('/transaksi/:id', Transaksi.updateTransaksi);
Router.delete('/transaksi/:id', Transaksi.deleteTransaksi);
Router.get('/laporan', Transaksi.getAllTransaksi);
module.exports = Router;
