import { Router } from "express";
import uploadFileMiddleware from "../library/multer";

const router = Router();
const products = [
    {
        id:1,
        title: 'Lentes',
        price: 200,
        thumbnail: 'URL A FOTO'
    },
    {
        id:2,
        title: 'taza',
        price: 150,
        thumbnail: 'URL A FOTO'
    },

];

router

.route('/')
.get((req, res) => {
    console.log('Solicitaron todos los productos')
        const response = {
            status: 'ok',
            data: products,
        }    

    res.json(response)
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


router
.route(':id')

.get((req, res) =>{
    console.log(`Solicitaron el producto de id: ${req.params.id}`)
    const { id } = req.params;
    const product = products.find(product => product.id === Number(id))
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

    res.status(statusCode).json(response);
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