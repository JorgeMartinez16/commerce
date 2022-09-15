const express = require('express');

const productsRouter =require('./products.router') //importamos el modulo routers de productos
const usersRouter = require('./users.router');
const categoriesRouter = require ('./categories.router');

function routerApi(app){                          //creamos una funcion que reciba la app
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/products', productsRouter)          //definimos end point con todo el router de /products
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    
}

module.exports = routerApi;