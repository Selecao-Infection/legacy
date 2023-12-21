'use client'

import React, {useState , useEffect } from "react";
import ButtonAddProduct from "./ButtonProduactPage";
import FilterBar from "./FilterBar";
import Products from "./Products";
import {useQuery} from 'react-query';


const ProductsPage =  () => {
 
// Fetcher function
const getFacts = async () => {
    const res = await fetch(`http://localhost:4000/api/get/product`,{
            next:{
        //         revalidate:120,
            }
        });  
    return res.json();
};
// Using the hook
const {data, error, isLoading} = useQuery('randomFacts', getFacts);

console.log(data,"data");

  

    return (

        <>
            <div className="relative  w-full h-full overflow-hidden flex flex-row items-start justify-start py-0 px-px box-border text-left text-[26px] text-white font-poppins">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start p-10 gap-[60px]">
                    <FilterBar />
                    <div className="flex-1 h-full flex flex-col items-start justify-start gap-[24px] min-w-[350px] max-w-[960px] text-base text-gray-400">

                        <ButtonAddProduct />
                        
                        <Products />
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