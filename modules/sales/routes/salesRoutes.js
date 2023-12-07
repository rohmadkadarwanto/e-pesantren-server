// modules/sales/routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSalesById);
router.post('/sales', salesController.createSales);
router.put('/sales/:id', salesController.updateSales);
router.delete('/sales/:id', salesController.deleteSales);

module.exports = router;
