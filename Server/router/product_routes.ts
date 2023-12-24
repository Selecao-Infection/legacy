import express from 'express';
import { getAllProduct , createProduct,updateProduct,deleteProduct,getNewProduct,getProductById} from '../controller/product_controller';
export const productRoute = express.Router();

productRoute.get('/get/product',getAllProduct)
productRoute.get('/get/product/new',getNewProduct)
productRoute.get('/get/product/:id',getProductById)


productRoute.post('/post/product/create',createProduct)
productRoute.put('/put/product/update/:id',updateProduct)
productRoute.delete('/delete/product/delete/:id',deleteProduct)

