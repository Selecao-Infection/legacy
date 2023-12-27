'use client'

import React from "react";
import Link from "next/link";
type ProductType = {
  id: number;
  productName: string,
  price: number,
  likes: number,
  category: string,
  imageUrl: string,
  new: boolean,
  brandId: string,

}

interface AddProduct {
  fetchProducts: () => Promise<any>;
  products: any
  // Other props, if any
}

const ButtonAddProduct: React.FC<AddProduct> = ({ products, fetchProducts }) => {
  console.log(products, "produact data from button");




  return (
    <>
      <div className="self-stretch flex  w-full  flex-row items-center justify-between py-0 px-[10px] pl-5">
        <div className="flex-1 w-full relative max-w-[100px] "> {products.length} items</div>

        <div className="flex-1 max-w-[350px]  w-full shrink-0 flex flex-row items-center justify-center gap-[14px]">

          <button
            className="cursor-pointer min-w-[90px] p-2.5 bg-[transparent] flex-1 rounded-[8px] box-border h-[42px] flex flex-row items-center justify-center gap-[10px] border-[0.5px] border-solid border-white hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-gray-500"
            onClick={() => { fetchProducts() }}
          >
            <div className="  w-full relative text-base font-poppins text-white text-center">
              All Items
            </div>
          </button>

          <Link
            href="/Add-Product">

            <button className="cursor-pointer min-w-[110px] p-2.5 bg-[transparent] flex-1 rounded-[8px] box-border h-[42px] flex flex-row items-center justify-center gap-[10px] border-[0.5px] border-solid border-white hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-gray-500">
              <img
                className="relative w-[11px] h-[11px] object-cover"
                alt=""
                src="/group-427319091@2x.png"
              />
              <div className="relative text-base font-poppins text-white text-center">
                Add Product
              </div>
            </button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default ButtonAddProduct