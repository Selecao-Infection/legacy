'use client'

import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
type ProductTypeee = {
    id: string;
    productName: string;
    price: number;
    likes: number;
    category: string;
    gender: string;
    imageUrl: string[];
    brandId: string;
    description: string;
    rating: number;
    new: boolean



}

const Products = ({ products }: any) => {

    return (
        <>
            <div className=" justify-center md:self-stretch flex-1 flex  flex-wrap place-items-center items-center md:justify-start  text-mini-6 md:items-start gap-[10px] text-white md:gap-[40px]" >

                {
                    products.map((product: ProductTypeee) => {
                        // console.log(product);
                        return <CartProduct key={product.id} product={product} />
                    })}
            </div>



        </>
    )
}
export default Products