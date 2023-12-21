'use client'

import React, { useState , useEffect } from "react";
 import CartProduct from "./CartProduct";
//  type ProductType={
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

const Products = () => {

    return (
        <>
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-between text-mini-6 text-white gap-[40px]" >
               <CartProduct/>
                {/* {
                    data.map((product) => {
                        // console.log(product);
                        return <CartProduct key={product.id} product={product} />
                    })} */}
            </div>



        </>
    )
}
export default Products