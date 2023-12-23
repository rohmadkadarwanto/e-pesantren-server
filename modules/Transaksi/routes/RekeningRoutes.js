const Express = require('express');
const Router = Express.Router();
const RekeningController = require('../controllers/RekeningController');

Router.get('/rekening', RekeningController.getAllRekening);
Router.get('/rekening/:rekening', RekeningController.getRekeningByRekening);
Router.post('/rekening/create', RekeningController.createRekening);
Router.put('/rekening/update/:code', RekeningController.updateRekening);
Router.delete('/rekening/delete/:rekening', RekeningController.deleteRekening);

module.exports = Router;
