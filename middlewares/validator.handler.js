const boom = require('@hapi/boom');

function validatorHandler(schema, property){
    return (req, res, next)=>{
        const data = req[property];    // property porque no sabemos de donde viene el request
        const {error}= schema.validate(data);
        if (error){
           next(boom.badRequest(eror));
        }
        next();
    }
    
}

module.exports = validatorHandler;