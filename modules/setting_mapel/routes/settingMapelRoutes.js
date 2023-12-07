// modules/setting_mapel/routes/settingMapelRoutes.js
const express = require('express');
const router = express.Router();
const settingMapelController = require('../controllers/settingMapelController');

router.get('/setting_mapel', settingMapelController.getAllSettingMapel);
router.get('/setting_mapel/:id', settingMapelController.getSettingMapelById);
router.post('/setting_mapel', settingMapelController.createSettingMapel);
router.put('/setting_mapel/:id', settingMapelController.updateSettingMapel);
router.delete('/setting_mapel/:id', settingMapelController.deleteSettingMapel);

module.exports = router;
