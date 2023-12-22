
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Favorites {
    id        :string,  
    userId    :string,
    productId :string,
  }


  const prisma = new PrismaClient();


  export const getFavorite = async (req: Request, res: Response) => {
    try {
      const  favorite: Favorites[] = await prisma.favorites.findMany({
        include :{
          Product :true
        }
      });
      res.json(favorite);
    } catch (error) {
      res.json(error);
    }
  };

  export const favoriteproduct = async (req: Request, res: Response) => {
    const { userId, productId }: Favorites = req.body;
    try {
      const Favorites: Favorites = await prisma.favorites.create({
        data: req.body,
        include :{Product:true}
      });
      res.json(Favorites)
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  };


  export const deleteFavorite = async (req: Request, res: Response) => {
    const { id } = req.params;

  try {
    const unlike = await prisma.favorites.delete({
      where: { id },
    });

    res.json(unlike);
  } catch (err) {
    console.error(err, "Error unlike");
    res.json(err);
  } 
};