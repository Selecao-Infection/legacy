import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

type Question ={
  content: string;
  userId: string;
}


const prisma = new PrismaClient();

export const getAll = async (req: Request, res: Response) => {
  try {
    const questions: Question[] = await prisma.question.findMany({
     
      select:{
userId: true,
content: true,
User :{
  select :{
    userName:true,
    email :true,
    pdp :true,
  }
}
      }
    });
    res.json(questions);
  } catch (error) {
    res.json(error);
  }
};

export const createQ = async (req: Request, res: Response) => {
  const { userId, content, id }  = req.body;

  try {
    const questionBody:Question = {
      content: content,
      userId:  userId ,
    };

    const question = await prisma.question.create({
        data: questionBody,
        include : {User:true}

      });
  
      res.json(question);
    } catch (error) {
      res.json(error);
    }
  };
