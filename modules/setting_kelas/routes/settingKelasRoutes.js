// modules/setting_kelas/routes/settingKelasRoutes.js
const express = require('express');
const router = express.Router();
const settingKelasController = require('../controllers/settingKelasController');

router.get('/setting_kelas', settingKelasController.getAllSettingKelas);
router.get('/setting_kelas/:id', settingKelasController.getSettingKelasById);
router.post('/setting_kelas', settingKelasController.createSettingKelas);
router.put('/setting_kelas/:id', settingKelasController.updateSettingKelas);
router.delete('/setting_kelas/:id', settingKelasController.deleteSettingKelas);

module.exports = router;
