'use client'

import React, { useState } from "react";
import Image from "next/image";
import likeWhite from "../../../public/Vector (5).png"
import LikeRed from "../../../public/heard.png"
import './index.css'
// import FakeProduct from "../../public/collection7.png"


type ProductType = {
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

const CartProduct = ({ product }: { product: ProductType }) => {

    const [like, setLike] = useState(likeWhite)



    return (
        <>
            <div className="rounded-lg bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-wrap md:items-center md:justify-center  justify-start pt-5 px-3.5 pb-4 text-half-white">
                {/* <div className=" max-h-[2px] h-full w-full " >
                <button className="button  ">
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
              
                </button>
                </div> */}
               
                <div className="relative flex-wrap w-[258px] h-[398.5px] md:place-items-start ">

                    <Image
                        width={500}
                        height={500}

                        className="absolute top-[0px] left-[5.9px] rounded-5xs-33  w-[247px] h-[277.5px] object-cover"
                        alt=""
                        // src={FakeProduct}
                        src={product.imageUrl[0]}
                    />
                    <div className="absolute top-[291.5px] left-[0px] w-[258px] flex flex-col items-start justify-start gap-[13px]">
                        <div className="self-stretch flex flex-wrap items-start justify-between py-0 pr-1 pl-0">
                            <div className="relative font-medium inline-block w-[197px] shrink-0">
                                {product.category}
                            </div>
                            <div className="relative text-2xs font-medium"> {product.gender} </div>
                        </div>
                        <div className="self-stretch flex flex-wrap items-start justify-between py-0 pr-[3px] pl-0 text-white">
                            <b className="relative inline-block w-[174px] shrink-0">
                                {product.productName}
                            </b>
                            <b className="relative"> {product.price}   $</b>
                        </div>
                        <div className="self-stretch relative h-[37px]">
                            <div className="absolute top-[0px] left-[0px] w-[258px] flex flex-wrap items-center justify-start py-0 pr-2.5 pl-1.5 box-border gap-[18px]">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 flex flex-col items-center justify-start"
                                    onClick={() => { setLike(LikeRed) }}
                                >
                                    <Image
                                        className="relative w-[20px] h-[18px] object-cover"
                                        alt=""
                                        src={like}
                                    />
                                </button>
                                <button className="cursor-pointer [border:none] py-[7.4px] px-[14.7px] bg-[transparent] flex-1 rounded-5xs-33 text-white-500 bg-violet-600 w-[8rem]  rounded-full  p-2 h-[37px] flex flex-wrap items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-violet-900">
                                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-center inline-block w-[84.3px] h-[21.9px] shrink-0">
                                        Buy Now
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartProduct