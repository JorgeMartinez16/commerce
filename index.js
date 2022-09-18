const express = require ('express');
const cors = require ('cors');
const routerApi = require('./routes');

//importamos middleware
const{logErrors, errorHandler, boomErrorHandler}= require('./middlewares/error.handler');

const e = require('express');
const app = express();
const port = 3000;

//midle
app.use(express.json());

const whitelist = ['http://localhost:8080']
const options ={
    origin: (origin, callback)=>{
        if(whitelist.includes(origin)){
            callback(null, true);
        }else {
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors(options));

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