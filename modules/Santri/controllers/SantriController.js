// modules/Santri/controllers/SantriController.js
const SantriModel = require('../models/SantriModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllSantri = async (req, res) => {
  try {
    const results = await SantriModel.getAllSantri();

    const santriData = results.map(result => ({
      nis: result.nis,
      name: result.name,
      tmp_lahir: result.tmp_lahir,
      tgl_lahir: result.tgl_lahir,
      address: result.address,
      status: result.status,
      ayah_santri:{
        nama: result.nama_ayah,
        pekerjaan: result.pekerjaan_ayah,
        alamat: result.alamat_ayah
      },
      ibu_santri: {
        nama: result.nama_ibu,
        pekerjaan: result.pekerjaan_ibu,
        alamat: result.alamat_ibu
      },
      wali_santri:{
        nama: result.nama_wali,
        pekerjaan: result.pekerjaan_wali,
        alamat: result.alamat_wali
      }
    }));

    Response.success(res, santriData);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSantriByNis = async (req, res) => {
  const SantriNis = req.params.nis;
  try {
    const results = await SantriModel.getSantriByNis(SantriNis);

    const santriData = results.map(result => ({
      nis: result.nis,
      name: result.name,
      tmp_lahir: result.tmp_lahir,
      tgl_lahir: result.tgl_lahir,
      address: result.address,
      status: result.status,
      ayah_santri:{
        nama: result.nama_ayah,
        pekerjaan: result.pekerjaan_ayah,
        alamat: result.alamat_ayah
      },
      ibu_santri: {
        nama: result.nama_ibu,
        pekerjaan: result.pekerjaan_ibu,
        alamat: result.alamat_ibu
      },
      wali_santri:{
        nama: result.nama_wali,
        pekerjaan: result.pekerjaan_wali,
        alamat: result.alamat_wali
      }
    }));

    Response.success(res, santriData);

  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSantri = async (req, res) => {

  const {
    nis,
    name,
    tmp_lahir,
    tgl_lahir,
    address,
    status,
    ayah_nama,
    ayah_pekerjaan,
    ayah_alamat,
    ibu_nama,
    ibu_pekerjaan,
    ibu_alamat,
    wali_nama,
    wali_pekerjaan,
    wali_alamat
  } = req.body;

  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  // Ambil data aplikasi berdasarkan API key
  const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';


  const ayahSantriData = {
    nama: ayah_nama,
    pekerjaan: ayah_pekerjaan,
    alamat: ayah_alamat
  };

  const ibuSantriData = {
    nama: ibu_nama,
    pekerjaan: ibu_pekerjaan,
    alamat: ibu_alamat
  };

  const waliSantriData = {
    nama: wali_nama,
    pekerjaan: wali_pekerjaan,
    alamat: wali_alamat
  };

  const createSantri = {
    nis,
    app,
    name,
    tmp_lahir,
    tgl_lahir,
    address,
    status,
    ayah_santri: ayahSantriData,
    ibu_santri: ibuSantriData,
    wali_santri: waliSantriData
  };


  try {

    const newSantri = await SantriModel.createSantri(createSantri);
    Response.success(res, newSantri, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSantri = async (req, res) => {
  const SantriNis = req.params.nis;

  const {
    nis,
    name,
    tmp_lahir,
    tgl_lahir,
    address,
    status,
    ayah_nama,
    ayah_pekerjaan,
    ayah_alamat,
    ibu_nama,
    ibu_pekerjaan,
    ibu_alamat,
    wali_nama,
    wali_pekerjaan,
    wali_alamat
  } = req.body;

  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  // Ambil data aplikasi berdasarkan API key
  const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';


  const ayahSantriData = {
    nama: ayah_nama,
    pekerjaan: ayah_pekerjaan,
    alamat: ayah_alamat,
    updated_at: new Date()
  };

  const ibuSantriData = {
    nama: ibu_nama,
    pekerjaan: ibu_pekerjaan,
    alamat: ibu_alamat,
    updated_at: new Date()
  };

  const waliSantriData = {
    nama: wali_nama,
    pekerjaan: wali_pekerjaan,
    alamat: wali_alamat,
    updated_at: new Date()
  };

  const updateSantri = {
    nis,
    app,
    name,
    tmp_lahir,
    tgl_lahir,
    address,
    status,
    updated_at: new Date(),
    ayah_santri: ayahSantriData,
    ibu_santri: ibuSantriData,
    wali_santri: waliSantriDat
  };

  try {
    const updatedSantri = await SantriModel.updateSantri(SantriNis, updateSantri);
    Response.success(res, updatedSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSantri = async (req, res) => {
  const SantriNis = req.params.nis;
  try {
    const deleteSantri = await SantriModel.deleteSantri(SantriNis);
    Response.success(res, deleteSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};
