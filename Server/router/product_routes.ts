import express from 'express';
import { getAllProduct , createProduct,updateProduct,deleteProduct} from '../controller/product_controller';
export const productRoute = express.Router();

productRoute.get('/get/product',getAllProduct)
productRoute.post('/post/product/create',createProduct)
productRoute.put('/put/product/update',updateProduct)
productRoute.delete('/delete/product/delete',deleteProduct)

