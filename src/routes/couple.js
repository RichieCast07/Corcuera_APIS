const express = require('express');
const router = express.Router();
const couple = require('../controllers/couple');

router.post('/couples', couple.createCouple);

router.get('/couples', couple.getAllCouples);

router.get('/couples/:id', couple.getCoupleById);

router.put('/couples/:id', couple.updateCouple);

router.delete('/couples/:id', couple.deleteCouple);

module.exports = router;
