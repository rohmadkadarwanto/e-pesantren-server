// utils/cryptoUtils.js
const crypto = require('crypto');
const appConfig = require('../config/appConfig');

exports.encryptData = (data) => {
  const algorithm = 'aes-256-cbc';
  const key = Buffer.from(appConfig.app.cryptoKey, 'hex');
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return `${iv.toString('hex')}:${encrypted}`;
};

exports.decryptData = (encryptedData) => {
  const algorithm = 'aes-256-cbc';
  const key = Buffer.from(appConfig.app.cryptoKey, 'hex');
  const [iv, encrypted] = encryptedData.split(':');

  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
};
