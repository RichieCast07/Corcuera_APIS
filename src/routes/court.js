const express = require('express');
const router = express.Router();
const court = require('../controllers/court');

router.post('/courts', court.createCourt);

router.get('/courts', court.getAllCourts);

router.get('/courts/:id', court.getCourtById);

router.put('/courts/:id', court.updateCourt);

router.delete('/courts/:id', court.deleteCourt);

module.exports = router;
