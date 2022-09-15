const express = require('express');
const router = express.Router(); //creando acceso a la aplicacion


router.get('/',(req, res)=>{
    const {limit, offset}= req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        });
    }else{
        res.send('no hay parametros');
    }
});



module.exports = router;//hacemos modulo exportable a router. 