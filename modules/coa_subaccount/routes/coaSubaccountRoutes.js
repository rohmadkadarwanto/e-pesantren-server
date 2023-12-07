// modules/coa_subaccount/routes/coaSubaccountRoutes.js
const express = require('express');
const router = express.Router();
const coaSubaccountController = require('../controllers/coaSubaccountController');

router.get('/coa_subaccount', coaSubaccountController.getAllCoaSubaccounts);
router.get('/coa_subaccount/:id', coaSubaccountController.getCoaSubaccountById);
router.post('/coa_subaccount', coaSubaccountController.createCoaSubaccount);
router.put('/coa_subaccount/:id', coaSubaccountController.updateCoaSubaccount);
router.delete('/coa_subaccount/:id', coaSubaccountController.deleteCoaSubaccount);

module.exports = router;
