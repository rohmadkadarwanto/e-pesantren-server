// modules/wali_santri/routes/waliSantriRoutes.js
const express = require('express');
const router = express.Router();
const waliSantriController = require('../controllers/waliSantriController');

router.get('/wali_santri', waliSantriController.getAllWaliSantri);
router.get('/wali_santri/:id', waliSantriController.getWaliSantriById);
router.post('/wali_santri', waliSantriController.createWaliSantri);
router.put('/wali_santri/:id', waliSantriController.updateWaliSantri);
router.delete('/wali_santri/:id', waliSantriController.deleteWaliSantri);

module.exports = router;
