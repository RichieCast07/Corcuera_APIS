const express = require('express');
const router = express.Router();
const courtController = require('../controllers/court');

router.post('/courts', courtController.createCourt);

router.get('/courts', courtController.getAllCourt);

router.get('/courts/:id', courtController.getCourtById);

router.put('/courts/:id', courtController.updateCourt);

router.delete('/courts/:id', courtController.deleteCourt);

module.exports = router;
