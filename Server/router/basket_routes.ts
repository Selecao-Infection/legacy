    import express from 'express';
import { getAllbasket,postBasket,deleteBasket,updateQty,decQty,deleteAll } from '../controller/basket_controller';

export const basketRoute = express.Router();

basketRoute.get('/get/basket/:id',getAllbasket)
basketRoute.post('/post/basket',postBasket)
basketRoute.delete('/delete/basket/:id',deleteBasket)
basketRoute.delete('/deleteOne/basket/:id',deleteAll)
basketRoute.put('/up/basket',updateQty)
basketRoute.put('/dec/basket',decQty)


