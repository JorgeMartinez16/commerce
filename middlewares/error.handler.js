function logErrors (err, req, res, next){
    console.log('logErrors');
    console.error.apply(err);
    next(err); //se le envia error
} //middleware que captura cualquier error


function errorHandler(err, req, res, next){
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
    
}

function boomErrorHandler(err, req, res, next){
    if(err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
            
    }
    next(err);
};




module.exports={logErrors, errorHandler, boomErrorHandler}