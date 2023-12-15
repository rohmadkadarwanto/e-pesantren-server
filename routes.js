const Express = require('express');
const Router = Express.Router();

const ApplicationRoutes = require('./modules/Application/routes/ApplicationRoutes');
const AsatidRoutes = require('./modules/Asatid/routes/AsatidRoutes');
const AyahSantriRoutes = require('./modules/AyahSantri/routes/AyahSantriRoutes');
const ClientRoutes = require('./modules/Client/routes/ClientRoutes');
const CoaAccountRoutes = require('./modules/CoaAccount/routes/CoaAccountRoutes');
const CoaSubaccountRoutes = require('./modules/CoaSubaccount/routes/CoaSubaccountRoutes');
const IbuSantriRoutes = require('./modules/IbuSantri/routes/IbuSantriRoutes');
const KelasRoutes = require('./modules/Kelas/routes/KelasRoutes');
const LembagaRoutes = require('./modules/Lembaga/routes/LembagaRoutes');
const MataPelajaranRoutes = require('./modules/MataPelajaran/routes/MataPelajaranRoutes');
const NewsRoutes = require('./modules/News/routes/NewsRoutes');
const SalesRoutes = require('./modules/Sales/routes/SalesRoutes');
const SantriRoutes = require('./modules/Santri/routes/SantriRoutes');
const SettingKelasRoutes = require('./modules/SettingKelas/routes/SettingKelasRoutes');
const SettingMapelRoutes = require('./modules/SettingMapel/routes/SettingMapelRoutes');
const TransaksiRoutes = require('./modules/Transaksi/routes/TransaksiRoutes');
const TransaksiDetailRoutes = require('./modules/TransaksiDetail/routes/TransaksiDetailRoutes');
const UsersRoutes = require('./modules/Users/routes/UsersRoutes');
const WaliSantriRoutes = require('./modules/WaliSantri/routes/WaliSantriRoutes');
const AuthRoutes = require('./modules/Auth/routes/AuthRoutes');

Router.use('/api', ApplicationRoutes);
Router.use('/api', AsatidRoutes);
Router.use('/api', AyahSantriRoutes);
Router.use('/api', ClientRoutes);
Router.use('/api', CoaAccountRoutes);
Router.use('/api', CoaSubaccountRoutes);
Router.use('/api', IbuSantriRoutes);
Router.use('/api', KelasRoutes);
Router.use('/api', LembagaRoutes);
Router.use('/api', MataPelajaranRoutes);
Router.use('/api', NewsRoutes);
Router.use('/api', SalesRoutes);
Router.use('/api', SantriRoutes);
Router.use('/api', SettingKelasRoutes);
Router.use('/api', SettingMapelRoutes);
Router.use('/api', TransaksiRoutes);
Router.use('/api', TransaksiDetailRoutes);
Router.use('/api', UsersRoutes);
Router.use('/api', WaliSantriRoutes);

//
Router.use('/api/auth', AuthRoutes);

module.exports = Router;
