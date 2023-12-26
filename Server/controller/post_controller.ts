import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Post {
  content: string;
  imageUrl: string;
  userId: string;
  Created_At:Date;
  Updated_At :Date
}

const prisma = new PrismaClient();

export const getAllPosts = async (req: Request, res: Response) => {
  const {userId}=req.body
  console.log(userId);
  
  try {
    const getPost: Post[] = await prisma.post.findMany({orderBy:[{Created_At:'desc'}],where:{userId:userId}});
    res.json(getPost);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { content, imageUrl, userId,Created_At }: Post = req.body;
  try {
    const createPost: Post = await prisma.post.create({
      data: req.body,
    });
    res.json(createPost);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { content, imageUrl, userId }: Post = req.body;
  
  const { id } = req.params;
  try {
    const postup: Post = await prisma.post.update({
      where: { id },
      data: req.body,
    });
    res.json(postup);
  } catch (err) {
    console.error(err, "Error updating post");
    res.json(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const deletedpost = await prisma.post.delete({
      where: { id },
    });

    res.json(deletedpost);
  } catch (err) {
    console.error(err, "Error deleting post");
    res.json(err);
  }
};
