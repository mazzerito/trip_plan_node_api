const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.post('/des', destinationController.createDestination);
router.get('/des', destinationController.getAllDestinations);
router.get('/des/:id', destinationController.getDestinationById);
router.put('/des/:id', destinationController.updateDestination);
router.delete('/des/:id', destinationController.deleteDestination);

module.exports = router;
