// modules/mata_pelajaran/routes/mataPelajaranRoutes.js
const express = require('express');
const router = express.Router();
const mataPelajaranController = require('../controllers/mataPelajaranController');

router.get('/mata_pelajaran', mataPelajaranController.getAllMataPelajaran);
router.get('/mata_pelajaran/:id', mataPelajaranController.getMataPelajaranById);
router.post('/mata_pelajaran', mataPelajaranController.createMataPelajaran);
router.put('/mata_pelajaran/:id', mataPelajaranController.updateMataPelajaran);
router.delete('/mata_pelajaran/:id', mataPelajaranController.deleteMataPelajaran);

module.exports = router;
