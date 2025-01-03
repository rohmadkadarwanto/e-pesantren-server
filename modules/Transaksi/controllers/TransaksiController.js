// modules/Transaksi/controllers/TransaksiController.js
const TransaksiModel = require('../models/TransaksiModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllTransaksi = async (req, res) => {
  try {
    const results = await TransaksiModel.getAllTransaksi();

    const Transaksi = results.map(result => ({
      transaksi_detail: {
        id: result.transaksi_id,
        code: result.code,
        account: {
          id: result.coa_account_id,
          code: result.coa_account_code,
          name: result.coa_account_name,
          type: result.coa_account_type,
          normal_balance: result.coa_account_normal_balance,
        },
        sub_account: {
          id: result.coa_subaccount_id,
          account_code: result.coa_subaccount_account_code,
          code: result.coa_subaccount_code,
          name: result.coa_subaccount_name,
        },
        amount: result.amount,
        type: result.type,
        created_at: result.transaksi_detail_created_at,
      },
    }));

    Response.success(res, Transaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getTransaksiByCode = async (req, res) => {
  const TransaksiCode = req.params.code;
  try {
    const results = await TransaksiModel.getTransaksiByCode(TransaksiCode);

    const Transaksi = results.map(result => ({
      transaksi_detail: {
        id: result.transaksi_id,
        code: result.code,
        account: {
          id: result.coa_account_id,
          code: result.coa_account_code,
          name: result.coa_account_name,
          type: result.coa_account_type,
          normal_balance: result.coa_account_normal_balance,
        },
        sub_account: {
          id: result.coa_subaccount_id,
          account_code: result.coa_subaccount_account_code,
          code: result.coa_subaccount_code,
          name: result.coa_subaccount_name,
        },
        amount: result.amount,
        type: result.type,
        created_at: result.transaksi_detail_created_at,
      },
    }));

    Response.success(res, Transaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createTransaksi = async (req, res) => {
  const { user, account, sub_account, amount, type, keterangan, status } = req.body;
  //const { user, keterangan, status } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const code = 'INV' + Math.random().toString(36).substring(2, 8).toUpperCase();
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newTransaksi = await TransaksiModel.createTransaksi({ app, code, user, account, sub_account, amount, type, keterangan, status } );
    Response.success(res, newTransaksi, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateTransaksi = async (req, res) => {
  const TransaksiCode = req.params.code;
  const { user, account, sub_account, amount, type, keterangan, status }  = req.body;
  try {
    const updatedTransaksi = await TransaksiModel.updateTransaksi(TransaksiCode, { user, account, sub_account, amount, type, keterangan, status, updated_at: new Date() } );
    Response.success(res, updatedTransaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteTransaksi = async (req, res) => {
  const TransaksiCode = req.params.code;
  try {
    const deleteTransaksi = await TransaksiModel.deleteTransaksi(TransaksiCode);
    Response.success(res, deleteTransaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};



exports.getNeraca = async (req, res) => {
  try {
    const neraca = await TransaksiModel.getNeraca();
    Response.success(res, neraca);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getLabaRugi = async (req, res) => {
  try {
    const labaRugi = await TransaksiModel.getLabaRugi();
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getPerubahanModal = async (req, res) => {
  try {
    const labaRugi = await TransaksiModel.getPerubahanModal();
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getArusKas = async (req, res) => {
  try {
    const labaRugi = await TransaksiModel.getArusKas();
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};


exports.getNeracaByPeriode = async (req, res) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const neracaByPeriode = await TransaksiModel.getNeracaByPeriode(startDate, endDate);
    Response.success(res, neracaByPeriode);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getLabaRugiByPeriode = async (req, res) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const labaRugi = await TransaksiModel.getLabaRugiByPeriode(startDate, endDate);
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getPerubahanModalByPeriode = async (req, res) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const labaRugi = await TransaksiModel.getPerubahanModalByPeriode(startDate, endDate);
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getArusKasByPeriode = async (req, res) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const labaRugi = await TransaksiModel.getArusKasByPeriode(startDate, endDate);
    Response.success(res, labaRugi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getTransaksiByPeriode = async (req, res) => {
  const startDate = req.params.startDate;
  const endDate = req.params.endDate;
  try {
    const results = await TransaksiModel.getTransaksiByPeriode(startDate, endDate);

    const Transaksi = results.map(result => ({
      transaksi_detail: {
        id: result.transaksi_id,
        code: result.code,
        account: {
          id: result.coa_account_id,
          code: result.coa_account_code,
          name: result.coa_account_name,
          type: result.coa_account_type,
          normal_balance: result.coa_account_normal_balance,
        },
        sub_account: {
          id: result.coa_subaccount_id,
          account_code: result.coa_subaccount_account_code,
          code: result.coa_subaccount_code,
          name: result.coa_subaccount_name,
        },
        amount: result.amount,
        type: result.type,
        created_at: result.transaksi_detail_created_at,
      },
    }));

    Response.success(res, Transaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};
