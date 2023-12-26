import express from 'express';
import { getAllProduct , createProduct,updateProduct,deleteProduct,getNewProduct,getProductById} from '../controller/product_controller';
import { getAllCategory , getAllStatus , getAllGender} from '../controller/productsFiltred_controller';
export const productRoute = express.Router();

productRoute.get('/get/product',getAllProduct)
productRoute.get('/get/:id',getProductById)

productRoute.get('/get/product/new',getNewProduct)
productRoute.get('/get/product/category/:category',getAllCategory)
productRoute.get('/get/product/gender/:gender',getAllGender)
productRoute.get('/get/product/status/:status',getAllStatus)


productRoute.post('/post/product/create',createProduct)
productRoute.put('/put/product/update/:id',updateProduct)
productRoute.delete('/delete/product/delete/:id',deleteProduct)

