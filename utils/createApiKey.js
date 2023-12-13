// utils/createApiKey.js
const crypto = require('crypto');

// Fungsi untuk membuat kunci API secara acak
exports.generateApiKey = () => {
  const apiKey = crypto.randomBytes(32).toString('hex');
  return apiKey;
};

// Contoh penggunaan:
// const apiKey = require('./createApiKey').generateApiKey();
// console.log(apiKey);
