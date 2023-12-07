// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoutes);
app.use('/api', aplikasiRoutes);
app.use('/api', kelasRoutes);
app.use('/api', asatidRoutes);
app.use('/api', ayahSantriRoutes);
app.use('/api', clientRoutes);
app.use('/api', coaAccountRoutes);
app.use('/api', coaSubaccountRoutes);
app.use('/api', ibuSantriRoutes);
app.use('/api', lembagaRoutes);
app.use('/api', mataPelajaranRoutes);
app.use('/api', newsRoutes);
app.use('/api', salesRoutes);
app.use('/api', santriRoutes);
app.use('/api', settingKelasRoutes);
app.use('/api', settingKelasRoutes);
app.use('/api', transaksiRoutes);
app.use('/api', transaksiDetailRoutes);
app.use('/api', waliSantriRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
