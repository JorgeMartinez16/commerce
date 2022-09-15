const express = require('express');
const router = express.Router(); //creando acceso a la aplicacion


router.get('/', (req, res)=>{
    res.send("sin categorias")
})


module.exports = router