import express from "express";
import {getAll ,createBrand , getThree } from '../controller/Brand_controller';


export const brandRoute =express.Router();
brandRoute.get('/', getAll)
brandRoute.post('/create',createBrand)
brandRoute.get('/getThree',getThree)




