// config/appConfig.js
module.exports = {
  // Konfigurasi Aplikasi
  app: {
    port: process.env.PORT || 3000,
    apiKeyHeader: 'api-key', // Nama header yang digunakan untuk API key
    defaultApiKey: 'd9741a2e5ff8c83e91ff92c528b6f6fc', // Nilai default API key
  },
};
