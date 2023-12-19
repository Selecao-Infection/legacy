import express from "express";
import {getAll ,createUser,updateUser} from '../controller/user_controller'
export const userRoute=express.Router();
userRoute.get('/', getAll)
userRoute.post('/create',createUser)
userRoute.put('/update',updateUser)



