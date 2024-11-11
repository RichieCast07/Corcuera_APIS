const express = require('express');
const router = express.Router();
const gameformation = require('../controllers/gameformation');

router.post('/agregar', gameformation.createCouple);

router.get('/obtener', gameformation.getAllCouples);

router.post('/agregar', gameformation.addScore);

router.delete('/eliminar/:id', gameformation.deleteCouple);

module.exports = router;
