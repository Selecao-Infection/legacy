    import express from 'express';
import { getAllbasket,postBasket,deleteBasket,updateQty,decQty } from '../controller/basket_controller';

export const basketRoute = express.Router();

basketRoute.get('/get/basket/:id',getAllbasket)
basketRoute.post('/post/basket',postBasket)
basketRoute.delete('/delete/basket/:id',deleteBasket)
basketRoute.put('/up/basket',updateQty)
basketRoute.put('/dec/basket',decQty)



