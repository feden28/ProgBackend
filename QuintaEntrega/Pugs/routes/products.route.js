import { Router } from "express";
import uploadFileMiddleware from "../library/multer.js";

const router = Router();
const products = [
    {
        id:1,
        title: 'Lentes',
        price: 200,
        thumbnail: 'https://www.iconfinder.com/icons/2138260/accessory_eyeglasses_fashion_protection_sunglasses_icon',
    },
    {
        id:2,
        title: 'Taza',
        price: 150,
        thumbnail: 'https://www.iconfinder.com/icons/7911582/mug_dad_fathers%20day_love%20dad_cup_beverage_coffee_icon',
    },

];

//rouote para todos los productos
router

.route('/')
.get((req, res) => {
    console.log('Solicitaron todos los productos')
        const response = {
            status: 'ok',
            data: products,
        }    

   // res.json(response)
   res.render('datos.pug', { products })
})

.post(uploadFileMiddleware.single('thumbnail'), (req, res) => {
    const { title, price } = req.body;
    const thumbnail = req.file;

    const newProdId = products[products.length - 1].id + 1;
    const newProduct = {
        id: newProdId,
        title,
        price,
        thumbnail: `http://localhost:8080/images/${thumbnail.originalname}`,
    
    }
    
    products.push(newProduct)

    const response = {
        status: 'ok',
        data: newProduct,
    }

    res.status(201).json(response);
})

//route para productos por ID
router
.route('/:id')

.get((req, res) =>{
    console.log(`Solicitaron el producto de id: ${req.params.id}`)
    const { id } = req.params;
    const product = products.find(product => product.id === Number(id))
    console.log(product)
    let response;       // = product ? {status: 'ok', data: 'product'} : {status: 'error not found', data: null} - CON TERNARIO
    let statusCode;     // = product ? 200 : 404; CON TERNARIO
    
    if(product){
            response = {
                status: 'ok',
                data: product,
            };
        statusCode = 200;
    } else {
        response = {
            status: 'error',
            data: null,
        }
        statusCode = 404;
    }

   // res.status(statusCode).json(response);
    res.render("product", product)
})

.put((req, res) =>{
    const { id } = req.params;
    const indexProductUpdate = products.find(product => product.id === Number(id));
    
    if(!indexProductUpdate){
        response = {
            status: 'Not found',
            data: null,
        };
        return  res.status(404).json(response);
    }

    products.splice(indexProductUpdate, 1, { id, title, price });

    res.status(200).json({ status: 'Updated', data: { id, title, price }, });
})

.delete((req, res) => {
    const { id } = req.params;
    const indexProductUpdate = products.find(product => product.id === Number(id));
    const productDeleted = products[indexProductUpdate];
    
    if(!indexProductUpdate){
        response = {
            status: 'Not found',
            data: null,
        };
        return  res.status(404).json(response);
    }

    products.splice(indexProductUpdate, 1);

    res.status(200).json({ status: 'Deleted', data: productDeleted, });
})


export default router; 