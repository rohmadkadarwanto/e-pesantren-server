// modules/transaksi_detail/routes/transaksiDetailRoutes.js
const express = require('express');
const router = express.Router();
const transaksiDetailController = require('../controllers/transaksiDetailController');

router.get('/transaksi_detail', transaksiDetailController.getAllTransaksiDetails);
router.get('/transaksi_detail/:id', transaksiDetailController.getTransaksiDetailById);
router.post('/transaksi_detail', transaksiDetailController.createTransaksiDetail);
router.put('/transaksi_detail/:id', transaksiDetailController.updateTransaksiDetail);
router.delete('/transaksi_detail/:id', transaksiDetailController.deleteTransaksiDetail);

module.exports = router;
