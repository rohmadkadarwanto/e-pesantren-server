// modules/asatid/routes/asatidRoutes.js
const express = require('express');
const router = express.Router();
const asatidController = require('../controllers/asatidController');

router.get('/asatid', asatidController.getAllAsatid);
router.get('/asatid/:id', asatidController.getAsatidById);
router.post('/asatid', asatidController.createAsatid);
router.put('/asatid/:id', asatidController.updateAsatid);
router.delete('/asatid/:id', asatidController.deleteAsatid);

module.exports = router;
