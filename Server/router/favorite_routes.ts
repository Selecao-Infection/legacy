import express from "express";
export const favoriteRoute = express.Router();

import { getFavorite,favoriteproduct,deleteFavorite } from "../controller/favorite_controller";


favoriteRoute.post('/get/favorite',getFavorite)
favoriteRoute.post('/post/favorite',favoriteproduct)
favoriteRoute.delete('/delete/favorite/:id',deleteFavorite)