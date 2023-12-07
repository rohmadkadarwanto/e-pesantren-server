// modules/lembaga/routes/lembagaRoutes.js
const express = require('express');
const router = express.Router();
const lembagaController = require('../controllers/lembagaController');

router.get('/lembaga', lembagaController.getAllLembaga);
router.get('/lembaga/:id', lembagaController.getLembagaById);
router.post('/lembaga', lembagaController.createLembaga);
router.put('/lembaga/:id', lembagaController.updateLembaga);
router.delete('/lembaga/:id', lembagaController.deleteLembaga);

module.exports = router;
