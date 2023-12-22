import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Basket {
  id: string;
  userId: string;
  productId: string;
}

const prisma = new PrismaClient();

export const getAllbasket = async (req: Request, res: Response) => {
  try {
    const basket: Basket[] = await prisma.basket.findMany();
    res.json(basket);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const postBasket = async (req: Request, res: Response) => {
  const { id, userId, productId }: Basket = req.body;
  try {
    const post: Basket = await prisma.basket.create({ data: req.body });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const deleteBasket = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteFromBasket = await prisma.basket.delete({
      where: { id },
    });
    res.json(deleteFromBasket);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
