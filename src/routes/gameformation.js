const express = require('express');
const router = express.Router();
const gameformation = require('../controllers/gameformation');

router.post('/', gameformation.createCouple);

router.get('/', gameformation.getAllCouples);

router.post('/add-score', gameformation.addScore);

router.delete('/:id', gameformation.deleteCouple);

module.exports = router;
