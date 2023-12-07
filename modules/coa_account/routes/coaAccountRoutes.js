// modules/coa_account/routes/coaAccountRoutes.js
const express = require('express');
const router = express.Router();
const coaAccountController = require('../controllers/coaAccountController');

router.get('/coa_account', coaAccountController.getAllCoaAccounts);
router.get('/coa_account/:id', coaAccountController.getCoaAccountById);
router.post('/coa_account', coaAccountController.createCoaAccount);
router.put('/coa_account/:id', coaAccountController.updateCoaAccount);
router.delete('/coa_account/:id', coaAccountController.deleteCoaAccount);

module.exports = router;
