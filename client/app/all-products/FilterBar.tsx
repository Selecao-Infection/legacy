'use client'

import React, { useState, FunctionComponent } from "react";
import Image from "next/image";
import Filteer from "../../public/Filteer.png";
import dropDawn from "../../public/Vector (1).png"
import Line from "../../public/line-402@2x.png"
const FilterBar: FunctionComponent = (props) => {
    // console.log(props);

    // const { products, setProducts } = useContext(MyContext)
    const [status, setStatus] = useState(false)
    const [price, setPrice] = useState(false)
    const [collections, setCollections] = useState(false)
    const [categories, setCategories] = useState(false)


    return (
        <>
            <div className="self-stretch flex-1 rounded-[10px] bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[42px]  px-0 pb-48 box-border gap-[50px] min-w-[40px] max-w-[360px]">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-[30px] gap-[16px]">
                    <Image
                        className="relative w-[29.1px] h-[17px] object-cover"
                        src={Filteer}
                        alt=""
                    />
                    <div className="relative font-semibold">Filters</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <button
                            className="cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 "
                            onClick={() => setStatus(!status)}
                        >

                            <div className="relative w-[52px] h-6">
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Status
                                </button>
                            </div>
                            <Image
                                className="relative w-3 h-1.5 object-cover"
                                alt=""
                                src={dropDawn}
                            />
                        </button>
                        {status && (<> <div className=" hide self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                            <button
                                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                            // onClick={()=>{allStatus(1)}}
                            >
                                Available
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                // onClick={()=>{allStatus(0)}}
                                >
                                    Not Available
                                </button>
                            </div> </>)}
                        <Image 
                            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={Line}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <button
                            className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                            onClick={() => setPrice(!price)}

                        >
                            <div className="relative w-10 h-6">
                                <button className="  cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Price
                                </button>
                            </div>
                            <Image
                                className="relative w-3 h-1.5 object-cover"
                                alt=""
                                src={dropDawn}
                            />
                        </button>
                        {price && (<> <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                Hight Price
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Low Price
                                </button>
                            </div> </>)}
                        <Image
                            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={Line}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <button
                            className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                            onClick={() => setCollections(!collections)}
                        >
                            <div className="relative w-[90px] h-6">
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Collections
                                </button>
                            </div>
                            <Image
                                className="relative w-3 h-1.5 object-cover"
                                alt=""
                                src={dropDawn}
                            />
                        </button>

                        {collections && (<>  <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                            <button
                                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                            // onClick={()=>{allCollection("Summer")}}
                            >
                                Summer Collection
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                // onClick={()=>{allCollection("Winter")}}
                                >
                                    Winter Collection
                                </button>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    // onClick={()=>{allCollection("Autumn")}}
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Autumn Collection
                                </button>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    // onClick={()=>{allCollection("Spring")}}
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Spring Collection
                                </button>
                            </div> </>)}
                        <Image
                            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={Line}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <button className=" hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[25px] bg-[transparent] self-stretch flex flex-row items-center justify-between"
                            onClick={() => setCategories(!categories)}
                        >
                            <div className="relative w-[89px] h-6">
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Categories
                                </button>
                            </div>
                            <Image
                                className="relative w-3 h-1.5 object-cover"
                                alt=""
                                src={dropDawn}
                            />
                        </button>

                        {categories && (<>   <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                            <button
                                // onClick={()=>{allCategory("Women")}}

                                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                Women
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    // onClick={()=>{allCategory("Men")}}
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Men
                                </button>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    // onClick={()=>{allCategory("Kidss")}}
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block active:text-violet-700">
                                    Kids
                                </button>
                            </div> </>)}

                        <Image
                            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={Line}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
