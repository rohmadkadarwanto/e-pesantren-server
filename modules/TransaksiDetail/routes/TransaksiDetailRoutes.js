// modules/TransaksiDetail/routes/TransaksiDetailRoutes.js
const Express = require('express');
const Router = Express.Router();
const TransaksiDetail = require('../controllers/TransaksiDetailController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/transaksi-detail', TransaksiDetail.getAllTransaksiDetail);
Router.get('/transaksi-detail/:id', TransaksiDetail.getTransaksiDetailById);
Router.post('/transaksi-detail', TransaksiDetail.createTransaksiDetail);
Router.put('/transaksi-detail/:id', TransaksiDetail.updateTransaksiDetail);
Router.delete('/transaksi-detail/:id', TransaksiDetail.deleteTransaksiDetail);

module.exports = Router;
