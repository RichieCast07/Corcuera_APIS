const express = require('express');
const router = express.Router();
const couple = require('../controllers/couple');

router.post('/couples', coupleController.createCouple);

router.get('/couples', coupleController.getAllCouples);

router.get('/couples/:id', coupleController.getCoupleById);

router.put('/couples/:id', coupleController.updateCouple);

router.delete('/couples/:id', coupleController.deleteCouple);

module.exports = router;
