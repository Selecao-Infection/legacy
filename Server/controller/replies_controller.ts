import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

interface Replies {
    id: string;
    userId: string | null;
    content: string;
    questionId : string | null;

}


export const makeReply = async (req: Request, res: Response)=>{
    const { questionId, userId, content} = req.body
    try {

        const Replies : Replies = await prisma.replies.create({data: {questionId, userId, content}, include:{User:true}})
        res.json(Replies)
    }catch(err){
        res.json(err)
    }

}

export const getQReplies = async (req: Request, res: Response)=>{
    const {questionId} = req.params
    try {

        const Replies : Replies[] = await prisma.replies.findMany({where: {questionId:questionId}, include:{User:true}})
        res.json(Replies)
    }catch(err){
        res.json(err)
    }

}