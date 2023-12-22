import express from "express";
import {getAll ,createUser,updateUser, signIn,createWithGoogle,getOne,getOneId} from '../controller/user_controller'
export const userRoute=express.Router();
userRoute.get('/', getAll)
userRoute.post('/create',createUser)
userRoute.put('/update',updateUser)
userRoute.post('/signin', signIn)
userRoute.post('/google',createWithGoogle)
userRoute.post('/one',getOne)
userRoute.get('/profile/:id', getOneId)



