const express = require('express');
const controller = require('../controllers/tripController');
const router = express.Router();

router.get('/', controller.listTrips);
router.get('/:id', controller.getTrip);
router.post('/', controller.createTrip);
router.put('/:id', controller.updateTrip);
router.delete('/:id', controller.deleteTrip);
module.exports = router;
