// config/appConfig.js
module.exports = {
  // Konfigurasi Aplikasi
  app: {
    port: 3000,
    defaultAuthorization: '',
    cryptoKey:'cryptoKey',
    jwtExpiration:'jwtExpiration',
    jwtSecret: 'jwtSecret',
    apiKeyHeader: 'X-API-KEY', // Nama header yang digunakan untuk API key
    defaultApiKey: 'f88fccc6204c03bf05fda50c698282e5', // Nilai default API key
  },
  // Konfigurasi Database
  db: {
    host: '127.0.0.0',
    user: 'root',
    password: 'Delta@1988dsb',
    database: 'e_pesantren',
  },
};
