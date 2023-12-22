import express from 'express';
import { getAllbasket,postBasket,deleteBasket } from '../controller/basket_controller';

export const basketRoute = express.Router();

basketRoute.get('/get/basket',getAllbasket)
basketRoute.post('/post/basket',postBasket)
basketRoute.delete('/delete/basket/:id',deleteBasket)



