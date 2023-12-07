// modules/transaksi/routes/transaksiRoutes.js
const express = require('express');
const router = express.Router();
const transaksiController = require('../controllers/transaksiController');

router.get('/transaksi', transaksiController.getAllTransaksi);
router.get('/transaksi/:id', transaksiController.getTransaksiById);
router.post('/transaksi', transaksiController.createTransaksi);
router.put('/transaksi/:id', transaksiController.updateTransaksi);
router.delete('/transaksi/:id', transaksiController.deleteTransaksi);

module.exports = router;
