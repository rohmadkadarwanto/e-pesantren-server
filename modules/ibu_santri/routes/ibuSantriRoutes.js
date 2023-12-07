// modules/ibu_santri/routes/ibuSantriRoutes.js
const express = require('express');
const router = express.Router();
const ibuSantriController = require('../controllers/ibuSantriController');

router.get('/ibu_santri', ibuSantriController.getAllIbuSantri);
router.get('/ibu_santri/:id', ibuSantriController.getIbuSantriById);
router.post('/ibu_santri', ibuSantriController.createIbuSantri);
router.put('/ibu_santri/:id', ibuSantriController.updateIbuSantri);
router.delete('/ibu_santri/:id', ibuSantriController.deleteIbuSantri);

module.exports = router;
