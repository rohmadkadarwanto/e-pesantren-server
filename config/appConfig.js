// config/appConfig.js
module.exports = {
  // Konfigurasi Aplikasi
  app: {
    port: process.env.PORT || 3000,
    defaultAuthorization: '',
    cryptoKey:'cryptoKey',
    jwtExpiration:'jwtExpiration',
    jwtSecret: 'jwtSecret',
    apiKeyHeader: 'X-API-KEY', // Nama header yang digunakan untuk API key
    defaultApiKey: 'f88fccc6204c03bf05fda50c698282e5', // Nilai default API key
  },
};
