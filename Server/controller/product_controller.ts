import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Product {
  productName: string;
  price: number;
  category: string;
  imageUrl: string;
  likes: number;
  brandId: string;

}
const prisma = new PrismaClient();
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product: Product[] = await prisma.product.findMany();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { productName, price, category, imageUrl, likes,brandId } = req.body;

  try {
    const prodBody : Product = { 
      productName, 
      price, 
      category, 
      imageUrl, 
      likes,
      brandId 
    }

    const prod =   await prisma.product.create({
      data: prodBody
    });

    res.json(prod);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const { productName, price, category, imageUrl, likes}: Product =
    req.body;
    const {id}  = req.body 
  try {
    const prod: Product = await prisma.product.update({
      where: {id},
      data: req.body,
    });
    res.json(prod);
  } catch (err) {
    console.error(err, "Error updating product");
    res.json(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.body;
  
    try {
      const deletedProduct = await prisma.product.delete({
        where: { id },
      });
  
      res.json(deletedProduct);
    } catch (err) {
      console.error(err, "Error deleting product");
      res.json(err);
    }
  };
