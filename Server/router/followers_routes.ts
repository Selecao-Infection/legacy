import express from "express";
export const followRoute = express.Router();
import { getFollowers,followingBrand,deleteFollow } from "../controller/followers_controller";


followRoute.get('/get/followers',getFollowers)
followRoute.post('/post/followers',followingBrand)
followRoute.delete('/delete/followers/:id',deleteFollow)



