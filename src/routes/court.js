const express = require('express');
const router = express.Router();
const court = require('../controllers/court');

router.post('/agregar', court.createCourt);

router.get('/obtener', court.getAllCourts);

router.get('/obtener/:id', court.getCourtById);

router.put('/editar/:id', court.updateCourt);

router.delete('/eliminar/:id', court.deleteCourt);

module.exports = router;
