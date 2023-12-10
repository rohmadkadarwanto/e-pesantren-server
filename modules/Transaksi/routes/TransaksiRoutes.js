// modules/Transaksi/routes/TransaksiRoutes.js
const Express = require('express');
const Router = Express.Router();
const Transaksi = require('../controllers/TransaksiController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/transaksi', Transaksi.getAllTransaksi);
Router.get('/transaksi/:id', Transaksi.getTransaksiById);
Router.post('/transaksi', Transaksi.createTransaksi);
Router.put('/transaksi/:id', Transaksi.updateTransaksi);
Router.delete('/transaksi/:id', Transaksi.deleteTransaksi);

module.exports = Router;
