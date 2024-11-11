const express = require('express');
const router = express.Router();
const couple = require('../controllers/couple');

router.post('/agregar', couple.createCouple);

router.get('/obtener', couple.getAllCouples);

router.get('/obtener/:id', couple.getCoupleById);

router.put('/editar/:id', couple.updateCouple);

router.delete('/eliminar/:id', couple.deleteCouple);

module.exports = router;
