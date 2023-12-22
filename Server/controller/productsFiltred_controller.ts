import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


interface Product {
    productName: string;
    price: number;
    likes: number;
    category: string;
    imageUrl: string;
    new:  boolean;
    brandId: string;
    
  }

  const prisma = new PrismaClient();

  export const getAllStatus = async (req: Request, res: Response) => {
    const status:any = JSON.parse(req.params.status)
    console.log(status,"status get all status");
    try {
      const product: Product[] = await prisma.product.findMany({
        where: {
          new: status
        }
      });
      res.json(product);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  };

  export const getAllCategory = async (req: Request, res: Response) => {

   const category = req.params.category
   console.log(category,"category get all category");
   
    try {
      const product: Product[] = await prisma.product.findMany({
        where: {
            category: category
        }
      });
      res.json(product);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  };

  export const getAllGender = async (req: Request, res: Response) => {

    const gender = req.params.gender
    console.log(gender,"Gender get all Gender");
    
     try {
       const product: Product[] = await prisma.product.findMany({
         where: {
          gender: gender
         }
       });
       res.json(product);
     } catch (err) {
       console.error(err);
       res.json(err);
     }
   };

