
const express = require('express');
const userRoutes = require('./modules/user/routes/userRoutes');
const aplikasiRoutes = require('./modules/aplikasi/routes/aplikasiRoutes');
const kelasRoutes = require('./modules/kelas/routes/kelasRoutes');
const asatidRoutes = require('./modules/asatid/routes/asatidRoutes');
const ayahSantriRoutes = require('./modules/ayah_santri/routes/ayahSantriRoutes');
const clientRoutes = require('./modules/client/routes/clientRoutes');
const coaAccountRoutes = require('./modules/coa_account/routes/coaAccountRoutes');
const coaSubaccountRoutes = require('./modules/coa_subaccount/routes/coaSubaccountRoutes');
const ibuSantriRoutes = require('./modules/ibu_santri/routes/ibuSantriRoutes');
const lembagaRoutes = require('./modules/lembaga/routes/lembagaRoutes');
const mataPelajaranRoutes = require('./modules/mata_pelajaran/routes/mataPelajaranRoutes');
const newsRoutes = require('./modules/news/routes/newsRoutes');
const salesRoutes = require('./modules/sales/routes/salesRoutes');
const santriRoutes = require('./modules/santri/routes/santriRoutes');
const settingKelasRoutes = require('./modules/setting_kelas/routes/settingKelasRoutes');
const settingMapelRoutes = require('./modules/setting_mapel/routes/settingMapelRoutes');
const transaksiRoutes = require('./modules/transaksi/routes/transaksiRoutes');
const transaksiDetailRoutes = require('./modules/transaksi_detail/routes/transaksiDetailRoutes');
const waliSantriRoutes = require('./modules/wali_santri/routes/waliSantriRoutes');

const router = express.Router()

// Routes
router.use('/api', userRoutes);
router.use('/api', aplikasiRoutes);
router.use('/api', kelasRoutes);

router.use('/api', asatidRoutes);
router.use('/api', ayahSantriRoutes);
router.use('/api', clientRoutes);
router.use('/api', coaAccountRoutes);
router.use('/api', coaSubaccountRoutes);
router.use('/api', ibuSantriRoutes);
router.use('/api', lembagaRoutes);
router.use('/api', mataPelajaranRoutes);
router.use('/api', newsRoutes);
router.use('/api', salesRoutes);
router.use('/api', santriRoutes);
router.use('/api', settingKelasRoutes);
router.use('/api', settingKelasRoutes);
router.use('/api', transaksiRoutes);
router.use('/api', transaksiDetailRoutes);
router.use('/api', waliSantriRoutes);

module.exports = router
