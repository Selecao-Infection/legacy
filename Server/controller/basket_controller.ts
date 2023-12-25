import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
interface Product {
  productName: string;
  price: number;
  likes: number;
  category: string;
  imageUrl: string;
  new: boolean;
  brandId: string;
}
interface Basket {
  id: string;
  userId: string;
  productId: string;
qty : number;


}


const prisma = new PrismaClient();

export const getAllbasket = async (req: Request, res: Response) => {
  const {id}=req.params
  try {
    const basket: Basket[] = await prisma.basket.findMany({where: {userId:id },include:{Product:true},orderBy: {id:'asc'}})
    res.json(basket);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const postBasket = async (req: Request, res: Response) => {
  const { userId, productId }: Basket = req.body;
  try {
    const post: Basket = await prisma.basket.create({ data: req.body , include:{Product:true} });
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

export const updateQty  =  async (req: Request, res: Response)=>{
   const {id } = <Basket>req.body
   try {
    const post: Basket = await prisma.basket.update({data:{qty:{increment : 1}},where: {id:id}});
    res.json("Updated")
   }catch(err){
    res.json(err)
   }  
}

export const decQty  =  async (req: Request, res: Response)=>{
   const {id } = <Basket>req.body
   try {
    const post: Basket = await prisma.basket.update({data:{qty:{decrement : 1}},where: {id:id}});
    res.json("Updated")
   }catch(err){
    res.json(err)
   }  
}
