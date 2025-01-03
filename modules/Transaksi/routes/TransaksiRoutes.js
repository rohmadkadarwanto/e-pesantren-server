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

Router.get('/transaksi/laporan/neraca', Transaksi.getNeraca);
Router.get('/transaksi/laporan/laba-rugi', Transaksi.getLabaRugi);
Router.get('/transaksi/laporan/perubahan-modal', Transaksi.getPerubahanModal);
Router.get('/transaksi/laporan/arus-kas', Transaksi.getArusKas);

Router.get('/transaksi/laporan/:startDate/:endDate', Transaksi.getTransaksiByPeriode);
Router.get('/transaksi/laporan/neraca/:startDate/:endDate', Transaksi.getNeracaByPeriode);
Router.get('/transaksi/laporan/laba-rugi/:startDate/:endDate', Transaksi.getLabaRugiByPeriode);
Router.get('/transaksi/laporan/perubahan-modal/:startDate/:endDate', Transaksi.getPerubahanModalByPeriode);
Router.get('/transaksi/laporan/arus-kas/:startDate/:endDate', Transaksi.getArusKasByPeriode);

module.exports = Router;
