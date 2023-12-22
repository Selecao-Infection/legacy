import express from "express";
import {getAll,createQ} from '../controller/question_controller'
export const questionRoute=express.Router();
questionRoute.get('/que', getAll)
questionRoute.post('/create',createQ)




