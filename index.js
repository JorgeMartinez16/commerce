const express = require ('express');
const routerApi = require('./routes');

const{logErrors, errorHandler, boomErrorHandler}= require('./middlewares/error.handler');
const e = require('express');
const app = express();
const port = 3000;

//midle
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("probando mensaje en server")
});

routerApi(app); //pasamos la app

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
    console.log('servidor en puerto 3000')
});