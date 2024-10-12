const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationContoller');

router.post('/destinations', destinationController.createDestination);
router.get('/destinations', destinationController.getAllDestinations);
router.get('/destinations/:id', destinationController.getDestinationById);
router.put('/destinations/:id', destinationController.updateDestination);
router.delete('/destinations/:id', destinationController.deleteDestination);

module.exports = router;
