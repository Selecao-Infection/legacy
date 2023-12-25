import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Product {
  productName: string;
  price: number;
  likes  : number;
  category: string;
  gender:string;
  imageUrl: string;
  brandId: string;
}
interface CreateProduct {
  productName: string;
  price: number;
  category: string;
  imageUrl: string[];
  description: string;
  rating: number;
  new: boolean;
  brandId: string;
}
const prisma = new PrismaClient();

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: Product[] = await prisma.product.findMany({
      where: {
        new: false,
      },
    });
    res.send(newProduct);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
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
<<<<<<< HEAD
  const { productName, price, category, gender, imageUrl,brandId } = req.body;

  try {
    const prodBody : CreateProduct = { 
      productName, 
      price, 
      category,
      gender, 
      imageUrl, 
      brandId 
    }

    const prod =   await prisma.product.create({
      data: prodBody
=======
  const { productName, price, category, imageUrl,description,rating, likes, brandId }: Product =
    req.body;
  try {
    const prod: Product = await prisma.product.create({
      data: req.body,
>>>>>>> 58c087f71e6149c3ac13553249d229ce8d970590
    });
    res.json(prod);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const { productName, price, category, imageUrl, likes }: Product = req.body;
  const { id } = req.params;
  try {
    const prod: Product = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    res.json(prod);
  } catch (err) {
    console.error(err, "Error updating product");
    res.json(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

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
