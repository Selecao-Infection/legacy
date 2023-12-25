import express from "express";
import {getAll ,createBrand , getThree,signIn,updateBrand } from '../controller/Brand_controller';


export const brandRoute =express.Router();
brandRoute.get('/', getAll)
brandRoute.post('/create',createBrand)
brandRoute.put('/update/:id',updateBrand)
brandRoute.post('/signin', signIn)
brandRoute.get('/getThree',getThree)




