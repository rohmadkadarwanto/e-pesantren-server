// modules/ayah_santri/routes/ayahSantriRoutes.js
const express = require('express');
const router = express.Router();
const ayahSantriController = require('../controllers/ayahSantriController');

router.get('/ayah_santri', ayahSantriController.getAllAyahSantri);
router.get('/ayah_santri/:id', ayahSantriController.getAyahSantriById);
router.post('/ayah_santri', ayahSantriController.createAyahSantri);
router.put('/ayah_santri/:id', ayahSantriController.updateAyahSantri);
router.delete('/ayah_santri/:id', ayahSantriController.deleteAyahSantri);

module.exports = router;
