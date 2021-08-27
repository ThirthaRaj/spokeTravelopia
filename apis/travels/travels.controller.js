/*eslint-env es6*/
const TripRequeuestModel = require('../../models').TripRequeuest;

module.exports.createTripRequest = async (req, res, next) => {
    try {
        const createTripRequest = await TripRequeuestModel.create(req.body)
        res.status(200).send({ status: 200, data: createTripRequest, message:"created trip request"})
    } catch (error) {
        next(error);
    }
}

module.exports.getTripRequests = async (req, res, next) => {
    try {
        const getTripRequests = await TripRequeuestModel.findAll({
            attributes:['name','email','budget','numberOfPeople','destination'],
            raw: true
        })
        res.status(200).send({ status: 200, data: getTripRequests, message:"created trip request"})
    } catch (error) {
        next(error);
    }
}