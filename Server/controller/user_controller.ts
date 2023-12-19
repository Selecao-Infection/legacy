import {PrismaClient} from "@prisma/client"
import { Request, Response } from 'express';
interface User{
  userName  :string,
  email     :string,
  birthday  :string,
  password  :string,
  coverUrl  :string,
  bio       :string,
  pdp       :string,
}
const prisma= new PrismaClient();   
export const getAll=async(req: Request,res: Response )=>{
    try {
        const users : User[]=await prisma.user.findMany() 
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}



export const createUser = async (req: Request, res: Response) => {
         const {userName,email,birthday,password,bio,pdp,coverUrl} = req.body
          
    
    try {
        const userBody: User = {
            userName  : userName,
            email     : email,
            birthday  : birthday,
            password  : password,
            coverUrl  : coverUrl,
            bio       : bio,
            pdp       : pdp,
          }
        const user = await prisma.user.create({
            data:userBody
        });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const updateUser = async(req : Request,res :Response)=>{
    const {userName,bio,pdp,coverUrl,id} = req.body
  try {
    const user :User = await prisma.user.update({
        where:{
            id
        },
        data : {
            userName,
             bio,
             pdp,
             coverUrl,
             
        }

    
    }) 
    res.json(user)
    
  } catch (error) {
    console.log(error);
    
  }
}
