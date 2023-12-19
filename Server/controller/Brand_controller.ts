import {PrismaClient} from "@prisma/client"
import { Request, Response } from 'express';


interface Brand {
    brandName  :string,
    email     :string,
    password  :string,
    imageUrl  :string,
  }
  interface Brandd {
    brandName  :string,
    imageUrl  :string,
  }

  const prisma= new PrismaClient();  
  
  
export const getAll=async(req: Request,res: Response )=>{
    try {
        const bands : Brand[] | Brandd[] =await prisma.brand.findMany() 
        res.json(bands)
    } catch (error) {
        res.json(error)
    }
}


  export const createBrand = async (req: Request, res: Response) => {
    const {brandName,email,password,imageUrl} = req.body
     

try {
   const brandBody: Brand = {
    brandName  : brandName,
       email     : email,
       password  : password,
       imageUrl  : imageUrl,
     }
   const brand = await prisma.brand.create({
       data :brandBody
   });
   res.json(brand);
} catch (err) {
   console.error(err);
   res.status(500).send('Internal Server Error');
}
};

export const getThree=async(req: Request,res: Response )=>{
  try {
      const bands : Brand[] | Brandd[] =await prisma.brand.findMany({
        skip: 1,
        take: 3,
      }) 
      res.json(bands)
  } catch (error) {
      res.json(error)
  }
}



// export const getOne =async(req: Request,res: Response )=>{

//        const id = req.params.id
//   try {
//       const bands : Brand[] | Brandd[]   =await prisma.brand.findUnique({
//         where: {
//           id: id
//         },
//       }) 
//       res.json(bands)
//   } catch (error) {
//       res.json(error)
//   }
// }