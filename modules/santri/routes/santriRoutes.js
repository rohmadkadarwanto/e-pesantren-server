// modules/santri/routes/santriRoutes.js
const express = require('express');
const router = express.Router();
const santriController = require('../controllers/santriController');

router.get('/santri', santriController.getAllSantri);
router.get('/santri/:id', santriController.getSantriById);
router.post('/santri', santriController.createSantri);
router.put('/santri/:id', santriController.updateSantri);
router.delete('/santri/:id', santriController.deleteSantri);

module.exports = router;
