'use client'

import React, {useState , useEffect } from "react";
import ButtonAddProduct from "./ButtonProduactPage";
import FilterBar from "./FilterBar";
import Products from "./Products";
import {useQuery} from 'react-query';
import dummyData from './DummyData.json'

interface FilterBarProps {
    filtred: (category: string) => Promise<any>;
    
    // Other props, if any
  }

 type ProductType={
        id:number;
        productName: string,
      price       :number,
      likes       :number,
      category   : string,
      imageUrl   : string,
      new   :      boolean ,
      brandId    : string,
 }
 
    

const ProductsPage =  ({products}:{products:ProductType[]}) => {
    const [product ,setProducts] = useState(dummyData)
 
// Fetcher function
const fetchProducts = async () => {
    const res = await fetch(`http://localhost:4000/api/get/product`,{
            next:{
             revalidate:120,
            }
        });  
        const jsonData = await res.json(); // Read JSON once
        setProducts(jsonData);
        return jsonData;
};

// Using the hook
const {data, isError, isLoading} = useQuery('AllProducts', fetchProducts);

const filtred = async (category:string)=>{
    const res = await fetch(`http://localhost:4000/api/get/product/category/${category}`,{
            next:{
             revalidate:120,
            }
        });  
       
        
        const jsonData = await res.json(); // Read JSON once
    setProducts(jsonData);
    return jsonData;
}

const filtredWithGender = async (gender:string)=>{
    const res = await fetch(`http://localhost:4000/api/get/product/gender/${gender}`,{
            next:{
             revalidate:120,
            }
        });  
       
        
        const jsonData = await res.json(); // Read JSON once
    setProducts(jsonData);
    return jsonData;
}

const filtredWithStatus = async (status:any)=>{
    const res = await fetch(`http://localhost:4000/api/get/product/status/${status}`,{
            next:{
             revalidate:120,
            }
        });  
       
        
        const jsonData = await res.json(); // Read JSON once
    setProducts(jsonData);
    console.log(jsonData,"data  from status");
    
    return jsonData;
}
const sortedProducts = (sort:string)=>{
if (sort == "Low") {
    setProducts([...product].sort((a, b) => a.price - b.price)) 
}else if (sort == "High"){
   setProducts([...product].sort((a, b) => b.price - a.price))
}
    
} 

if (isLoading){
return(
    <div>lOADING....</div>
)  
}     
 

    return (

        <>
            <div className="relative  w-full h-full overflow-hidden flex flex-row items-start justify-start py-0 px-px box-border text-left text-[26px] text-white font-poppins sm:flex-wrap">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start p-10 gap-[60px]  ">
                    <FilterBar filtred={filtred} filtredWithGender={filtredWithGender} filtredWithStatus={filtredWithStatus} sortedProducts={sortedProducts} />
                    <div className="flex-1 h-full flex flex-col items-start justify-start gap-[24px] min-w-[350px] max-w-[960px] text-base text-gray-400">

                        <ButtonAddProduct fetchProducts ={fetchProducts}   products= {product} />
                        
                        <Products products= {product} />
                    </div>
                </div>
            </div>  

        </>
    )
}

export default ProductsPage;















// export const getStaticProps: GetStaticProps = async () => {
//     const products = await fetch(`http://localhost:4000/api/get/product`);
//     return { props: { products }, revalidate: 60 };
//   };


    // const AllProducts = await fetch(`http://localhost:4000/api/get/product`,{
    //     next:{
    //         revalidate:120,
    //     }
    // })
    //     const products :ProductType[]= await AllProducts.json();
    //     console.log(products,"server produact");
        


    // import axios from "axios";
// import { GetStaticProps } from "next";
// type ProductType={
//     id:number;
//     productName: string,
//   price       :number,
//   likes       :number,
//   category   : string,
//   imageUrl   : string,
//   new   :      boolean ,
//   brandId    : string,

// }
// {products}:{products:ProductType[]}