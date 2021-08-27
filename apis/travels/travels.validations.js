/*eslint-env es6*/
const { celebrate, Joi} = require('celebrate');

module.exports = {
    addTravelRequestSchema: celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            budget: Joi.number().required(),
            numberOfPeople : Joi.number().required(),
            destination: Joi.string().required(),
        })
    })
}