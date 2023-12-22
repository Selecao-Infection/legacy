import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Followers {
  id: string;
  brandId: string;
  userId: string;
}



const prisma = new PrismaClient();

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const follower: Followers[] = await prisma.followers.findMany({
      include : {
        Brand :true,
       
      }
    });
    res.json(follower);
  } catch (error) {
    res.json(error);
  }
};

export const followingBrand = async (req: Request, res: Response) => {
  const { userId, brandId }: Followers = req.body;
  try {
    const followers: Followers = await prisma.followers.create({
      data: req.body,
      include :{Brand:true}
    },

    );
      res.json(followers)
  } catch (error) {
    console.error(error)
    res.json(error)
  }
};

export const deleteFollow = async (req: Request, res: Response) => {
    const { id } = req.params;

  try {
    const unfollow = await prisma.followers.delete({
      where: { id },
    });

    res.json(unfollow);
  } catch (err) {
    console.error(err, "Error unfollow");
    res.json(err);
  } 
};
