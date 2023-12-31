'use client'

import React, {useState , useEffect } from "react";
import ButtonAddProduct from "./ButtonProduactPage";
import FilterBar from "./FilterBar";
import Products from "./Products";
import {useQuery} from 'react-query';
import dummyData from './DummyData.json'
import IsLoading from "./IsLoading";

interface FilterBarProps {
    filtred: (category: string) => Promise<any>;
    
    // Other props, if any
  }

 type ProductType={
    id:string;
    productName: string;
    price: number;
    likes  : number;
    category: string;
    gender:string;
    imageUrl: string[];
    brandId: string;
    description :string;
    rating : number;   
    new   :      boolean 
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
    <>
     <IsLoading  />  
      </>
       
      
)  
}     
 

    return (

        <>
        
            <div className="relative  w-full h-full overflow-hidden flex flex-row items-start justify-start   sm:p-6   py-0 px-px box-border text-left text-[26px] text-white font-poppins sm:flex-wrap">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start   gap-[60px] lg:p-1    ">
                  
                  <div className="hidden  h-full sm:flex flex-col items-start justify-start" >
                  <FilterBar filtred={filtred} filtredWithGender={filtredWithGender} filtredWithStatus={filtredWithStatus} sortedProducts={sortedProducts} />
                    </div>  
                    <div className="flex-1 h-full flex flex-col md:items-start md:justify-start justify-center gap-[24px] min-w-[350px] max-w-[1260px] text-base text-gray-400 sm:px-5   ">
                        <div className="relative  inline-block sm:hidden " >
                               <FilterBar filtred={filtred} filtredWithGender={filtredWithGender} filtredWithStatus={filtredWithStatus} sortedProducts={sortedProducts} />
                       </div>
                        <ButtonAddProduct fetchProducts ={fetchProducts}   products= {product} />
                        
                        <Products products= {product} />
                    </div>
                </div>
            </div>  

        </>
    )
}

export default ProductsPage;











