// modules/aplikasi/routes/aplikasiRoutes.js
const express = require('express');
const router = express.Router();
const aplikasiController = require('../controllers/aplikasiController');

router.get('/aplikasi', aplikasiController.getAllAplikasi);
router.get('/aplikasi/:id', aplikasiController.getAplikasiById);
router.post('/aplikasi', aplikasiController.createAplikasi);
router.put('/aplikasi/:id', aplikasiController.updateAplikasi);

module.exports = router;
