const { response } = require('express');
const express = require('express');
const productsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')
const router = express.Router(); //creando acceso a la aplicacion

const service = new productsService();  //se crea instancia de la clase

router.get('/', async (req, res)=>{
    const products = await service.find();
    res.json(products);

});

router.get('/filter', (req, res)=>{
    res.send("ruta filtro");
})

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next)=>{
    try{
        const{id} = req.params;  
        const product = await service.findOne(id);
        res.json(product)
    }catch (error){
        next(error);
    }
    
    
});

//end point de creacion de producto
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);
  
router.patch('/:id', 
validatorHandler(getProductSchema, 'params'), 
validatorHandler(updateProductSchema, 'body'),
 async (req, res)=>{
   try{
     const { id }=req.params;
     const body= req.body;
     const product = await service.update(id, body);
     res.json(product)
   } catch (error){
     next(error);
   }//end point patch (recive objetos de forma parcial)
});

//delete
//end point patch (recive objetos de forma parcial)
router.delete('/:id', async (req, res)=>{
    const {id}= req.params;
    const rta = await service.delete(id,);
    res.json(rta)
});


module.exports= router;//hacemos modulo exportable a router. 
