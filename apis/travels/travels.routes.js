/*eslint-env es6*/
const router = require('express').Router();
const validator = require('./travels.validations');
const controller = require('./travels.controller');

router.post('/', validator.addTravelRequestSchema, controller.createTripRequest);
router.get('/', controller.getTripRequests);

module.exports = router;