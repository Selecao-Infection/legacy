import {PrismaClient} from "@prisma/client"
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


interface User{
  userName  :string,
  email     :string,
  birthday  :string,
  password  :string,
  id : string
}
interface Users{
  userName  :string,
  email     :string,
  pdp :string | null,
  id : string


}
interface UserGoogle{
  userName  :string,
  email     :string,
}

const prisma= new PrismaClient();   
export const getAll=async(req: Request,res: Response )=>{
    try {
const users : Users[]=await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}
export const getOne=async(req: Request,res: Response )=>{
    const {email} = req.body
    try {
        const users : Users[]=await prisma.user.findMany({where: {email:email}}) 
        const Token = jwt.sign({email : users[0].email, userName: users[0].userName,status:'user',pdp:users[0].pdp,id:users[0].id },'secret')
            res.json(Token)
        } catch (error) {
                 
            res.json(error)
            
    }
}






export const createUser = async (req: Request, res: Response) => {
    console.log(req.body);
    
         const {userName,email,birthday,password} :User= req.body
       
          const hashPassword : string = await bcrypt.hash(password, 10)
          
          
    
    try {
        // const userBody: User = {
        //     userName  : userName,
        //     email     : email,
        //     birthday  : birthday,
        //     password  : hashPassword,
        
        // }
        const user = await prisma.user.create({
            data:{...req.body ,password:hashPassword}
        });
        const Token = jwt.sign({userName:user.userName,pdp:user.pdp,id:user.id , status:'user',coverUrl:user.coverUrl ,email:user.email,bio:user.email},"secret")
        res.json(Token);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

export const updateUser = async(req : Request,res :Response)=>{
    const id = req.params.id
    const {userName,bio,pdp,coverUrl} = req.body
  try {
    const user :Users = await prisma.user.update({
        where:{
            id : id
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


    
   export const signIn = async (req: Request, res: Response) => {
        const {email,password} = req.body
        
        try {
            
            const user = await prisma.user.findUnique({
                where:{
                    email
                }
            })
            
            if(user){
                const isMatch = await bcrypt.compare(password,user.password)
                if(isMatch){
                    
                    const token = jwt.sign({id:user.id,userName:user.userName,pdp:user.pdp,status:'user',coverUrl:user.coverUrl , email:user.email, bio:user.id},"secret")
                    
                    res.json(token)
                }else{
                    res.status(401).json({
                        message : "Invalid Credentials"
                    })
                }
            }else{
                res.status(401).json({
                    message : "Invalid Credentials"
                })
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    export const createWithGoogle = async (req: Request, res: Response) => {
        
             const {userName,email} : UserGoogle = req.body 
           
              
              
        
        try {
            const userBody: UserGoogle = {
                userName  : userName,
                email     : email,
            
            }
            const user = await prisma.user.create({
                data:req.body
            });
            console.log('here');
            
            const Token = jwt.sign({ bio:user.bio , email:user.email, userName:user.userName,pdp:user.pdp,id:user.id , status:'user', coverUrl:user.coverUrl},"secret")
            res.json(Token);
        } catch (err) {
            
            res.status(500).send(err);
        }
    };


    export const getOneId=async(req: Request,res: Response )=>{
        const {id} = req.params
        try {
            const users : Users[]=await prisma.user.findMany({where: {id:id}}) 
              res.json(users)

            } catch (error) {
                     
                res.json(error)
                
        }
    }