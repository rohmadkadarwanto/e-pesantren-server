const Express = require('express');
const Router = Express.Router();

const ApplicationRoutes = require('./modules/Application/routes/ApplicationRoutes');
const AsatidRoutes = require('./modules/Asatid/routes/AsatidRoutes');
const ClientRoutes = require('./modules/Client/routes/ClientRoutes');
const CoaAccountRoutes = require('./modules/CoaAccount/routes/CoaAccountRoutes');
const CoaSubaccountRoutes = require('./modules/CoaSubaccount/routes/CoaSubaccountRoutes');
const KelasRoutes = require('./modules/Kelas/routes/KelasRoutes');
const LembagaRoutes = require('./modules/Lembaga/routes/LembagaRoutes');
const MataPelajaranRoutes = require('./modules/MataPelajaran/routes/MataPelajaranRoutes');
const NewsRoutes = require('./modules/News/routes/NewsRoutes');
const SalesRoutes = require('./modules/Sales/routes/SalesRoutes');
const SantriRoutes = require('./modules/Santri/routes/SantriRoutes');
const SettingMapelRoutes = require('./modules/SettingMapel/routes/SettingMapelRoutes');
const TransaksiRoutes = require('./modules/Transaksi/routes/TransaksiRoutes');
const UsersRoutes = require('./modules/Users/routes/UsersRoutes');
const AuthRoutes = require('./modules/Auth/routes/AuthRoutes');

const NasabahRoutes = require('./modules/Nasabah/routes/NasabahRoutes');
const RekeningRoutes = require('./modules/Transaksi/routes/RekeningRoutes');

Router.use('/api', ApplicationRoutes);
Router.use('/api', AsatidRoutes);
Router.use('/api', ClientRoutes);
Router.use('/api', CoaAccountRoutes);
Router.use('/api', CoaSubaccountRoutes);
Router.use('/api', KelasRoutes);
Router.use('/api', LembagaRoutes);
Router.use('/api', MataPelajaranRoutes);
Router.use('/api', NewsRoutes);
Router.use('/api', SalesRoutes);
Router.use('/api', SantriRoutes);
Router.use('/api', SettingMapelRoutes);
Router.use('/api', TransaksiRoutes);
Router.use('/api', UsersRoutes);

Router.use('/api', NasabahRoutes);
Router.use('/api', RekeningRoutes);
//
Router.use('/api/auth', AuthRoutes);

module.exports = Router;
