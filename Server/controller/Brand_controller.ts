
import {PrismaClient} from "@prisma/client"
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

interface Brand {
  id     :   string ,
  brandName :string,
  email     :string  ,    
  password  :string | null,
  imageUrl  :string | null,
  cover : string | null,
  }
  interface Brandd {
    brandName  :string,
    email:string,
    password: string,
  }
  
  
  
  
  const prisma= new PrismaClient();  
  
  




export const getThree=async(req: Request,res: Response )=>{
  try {
      const brand : Brand[] =await prisma.brand.findMany({
        skip: 1,
        take: 3,
      }) 
      res.json(brand)
  } catch (error) {
      res.json(error)
  }
}




 
  export const getAll=async(req: Request,res: Response )=>{
      try {
  const brand : Brand[]=await prisma.brand.findMany()
          res.json(brand)
      } catch (error) {
          res.json(error)
      }
  }
  export const getOne=async(req: Request,res: Response )=>{
      const {email} = req.body
      try {
          const brand : Brand[]=await prisma.brand.findMany({where: {email:email}}) 
          const Token = jwt.sign({email : brand[0].email, brandName: brand[0].brandName,status:'brand',pdp:brand[0].imageUrl,cover:brand[0].cover, },'secret')
              res.json(Token)
          } catch (error) {
                   
              res.json(error)
              
      }
  }
  
  
  
  
  
  
  export const createBrand = async (req: Request, res: Response) => {
      console.log(req.body);
      
           const {brandName,email,password,imageUrl,cover} :Brand= req.body
         
            const hashPassword : string = await bcrypt.hash(password, 10)
            
            
      
      try {
          const brandBody: Brandd = {
              brandName  : brandName,
              email     : email,
              password  : hashPassword,
          }
          const brand = await prisma.brand.create({
              data:{...req.body ,password:hashPassword}
          });
          const Token = jwt.sign({brandName:brand.brandName,pdp:brand.imageUrl,id:brand.id , status:'brand',coverUrl:brand.cover ,email:brand.email},"secret")
          res.json(Token);
      } catch (err) {
          res.status(500).send('Internal Server Error');
      }
  };
  
  export const updateBrand = async(req : Request,res :Response)=>{
      const id = req.params.id
      const {brandName,bio,imageUrl,cover} = req.body
    try {
      const user :Brand = await prisma.brand.update({
          where:{
              id : id
          },
          data : {
              brandName : brandName,
            
               imageUrl,
               cover,
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
              
              const brand = await prisma.brand.findUnique({
                  where:{
                      email
                  }
              })
              
              if(brand){
                  const isMatch = await bcrypt.compare(password,brand.password)
                  if(isMatch){
                      
                      const token = jwt.sign({id:brand.id,brandName:brand.brandName,pdp:brand.imageUrl,status:'brand',coverUrl:brand.cover , email:brand.email, bio:brand.id},"secret")
                      
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
  
      // export const createWithGoogle = async (req: Request, res: Response) => {
          
      //          const {userName,email} : UserGoogle = req.body 
             
                
                
          
      //     try {
      //         const userBody: UserGoogle = {
      //             userName  : userName,
      //             email     : email,
              
      //         }
      //         const user = await prisma.user.create({
      //             data:req.body
      //         });
      //         console.log('here');
              
      //         const Token = jwt.sign({ bio:user.bio , email:user.email, userName:user.userName,pdp:user.pdp,id:user.id , status:'user', coverUrl:user.coverUrl},"secret")
      //         res.json(Token);
      //     } catch (err) {
              
      //         res.status(500).send(err);
      //     }
      // };
  
  
  //     export const getOneId=async(req: Request,res: Response )=>{
  //         const {id} = req.params
  //         try {
  //             const users : Users[]=await prisma.user.findMany({where: {id:id}}) 
  //               res.json(users)
  
  //             } catch (error) {
                       
  //                 res.json(error)
                  
  //         }
  //     }



