// routes/nasabahRoutes.js
const express = require('express');
const NasabahController = require('../controllers/NasabahController');

const router = express.Router();

router.get('/nasabah', NasabahController.getAllNasabah);
router.get('/nasabah/:code', NasabahController.getNasabahByCode);
router.post('/nasabah/create', NasabahController.createNasabah);
router.put('/nasabah/update/:code', NasabahController.updateNasabah);
router.delete('/nasabah/delete/:code', NasabahController.deleteNasabah);

module.exports = router;
