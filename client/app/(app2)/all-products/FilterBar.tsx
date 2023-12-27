'use client'

import React, { useState, FunctionComponent } from "react";
import Image from "next/image";
import Filteer from "../../../public/Filteer.png";
import dropDawn from "../../../public/Vector (1).png"
import Line from "../../../public/line-402@2x.png"

interface FilterBarProps {
    filtred: (category: string) => Promise<any>;
    filtredWithGender: (gender: string) => Promise<any>
    filtredWithStatus: (status: any) => Promise<any>
    sortedProducts: (sort: string) => void
    // Other props, if any
}




const FilterBar: React.FC<FilterBarProps> = ({ filtred, filtredWithGender, filtredWithStatus, sortedProducts }) => {
    //  console.log(filtredWithGender,"filter from fulterbar");

    // const { products, setProducts } = useContext(MyContext)
    const [status, setStatus] = useState(false)
    const [price, setPrice] = useState(false)
    const [collections, setCollections] = useState(false)
    const [categories, setCategories] = useState(false)
    const [filterBar, setfilterBar] = useState(true)

    const handelFilter = (param:string)=>{
        if (param == "status") {
            setPrice(false)
            setCollections(false)
            setCategories(false)

        }
        if (param == "price") {
            setStatus(false)
            setCollections(false)
            setCategories(false)

        }
        if (param == "collections") {
            setStatus(false)
            setPrice(false)
            setCategories(false)

        }
        if (param == "categories") {
            setPrice(false)
            setCollections(false)
            setStatus(false)

        }
    }

    return (
        <>

            <form>
                {/* <div className="self-stretch flex-1 rounded-[10px] bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden  sm:flex flex-col items-start justify-start pt-[42px]  px-0 pb-48 box-border gap-[50px] min-w-[40px] max-w-[360px]  "> */}

                
                <div className=" flex-col min-h-[250px] relative self-stretch flex-1  inline-block sm:hidden w-full py-5 items-center justify-center pl-4 ">
                    <button
                        onClick={() => {
                            setStatus(!status);
                            handelFilter("status")
                        }}
                        id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                        Status
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {status && 
                    
                    <div id="dropdown" className="absolute z-10 items-center bg-white divide-y divide-gray-100 rounded-lg shadow max-w-34 dark:bg-gray-700 mt-2 w-full">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button
                                onClick={() => { filtredWithStatus(true) }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> Available </button>
                            </li>
                            <li>
                                <button 
                                onClick={() => { filtredWithStatus(false) }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400">Not Available</button>
                            </li>
                        </ul>
                    </div>}
                    <button
                        onClick={() => {
                            setPrice(!price);
                            handelFilter("price")
                        }}
                        id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                        Price
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {price && <div id="dropdown" className="absolute z-10 items-center bg-white divide-y divide-gray-100 rounded-lg shadow maw-w-34 dark:bg-gray-700 mt-2 w-full">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button 
                                onClick={() => sortedProducts("High")}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> High Price </button>
                            </li>
                            <li>
                                <button 
                                onClick={() => sortedProducts("Low")}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> Low Price</button>
                            </li>
                        </ul>
                    </div>}
                    <button
                        onClick={() => {
                            setCollections(!collections);
                            handelFilter("collections")
                        }}
                        id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                        Collections
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {collections && <div id="dropdown" className="absolute z-10 items-center bg-white divide-y divide-gray-100 rounded-lg shadow maw-w-34 dark:bg-gray-700 mt-2 w-full">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button 
                                 onClick={() => { filtred("Watch") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> Watch </button>
                            </li>
                            <li>
                                <button 
                                 onClick={() => { filtred("Ring") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400">Ring</button>
                            </li>
                            <li>
                                <button 
                                onClick={() => { filtred("Chain") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> Chain </button>
                            </li>
                            <li>
                                <button 
                                onClick={() => { filtred("Bracelet") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400">Bracelet</button>
                            </li>
                        </ul>
                    </div>}


                    <button
                        onClick={() => {
                            setCategories(!categories);
                            handelFilter("categories")
                        }}
                        id="dropdown-button" data-dropdown-toggle="dropdown" 
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-r-lg text-gray-900 bg-gray-100 border border-gray-300   hover:bg-violet-600 active:bg-violet-700  focus:ring-violet-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                        Categories
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {categories && <div id="dropdown" className="absolute z-10 items-center bg-white divide-y divide-gray-100 rounded-lg shadow maw-w-34 dark:bg-gray-700 mt-2 w-full">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button 
                                onClick={() => { filtredWithGender("Women") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400"> Women </button>
                            </li>
                            <li>
                                <button 
                                onClick={() => { filtredWithGender("Men") }}
                                type="button" className="inline-flex w-full px-2 py-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-violet-400">Men</button>
                            </li>
                        </ul>
                    </div>}

                </div>
            </form>





            <div className="self-stretch flex-1 rounded-[10px] bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden  sm:flex flex-col items-start justify-start pt-[42px]  px-0 pb-48 box-border gap-[50px] min-w-[40px] max-w-[360px]  " >
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
                                className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                onClick={() => { filtredWithStatus(true) }}
                            >
                                Available
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                    onClick={() => { filtredWithStatus(false) }}
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
                            <button
                                onClick={() => sortedProducts("High")}
                                className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                High Price
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    onClick={() => sortedProducts("Low")}
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
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
                                className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                onClick={() => { filtred("Watch") }}
                            >
                                Watch Collection
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                    onClick={() => { filtred("Ring") }}
                                >
                                    Ring Collection
                                </button>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    onClick={() => { filtred("Chain") }}
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Chain Collection
                                </button>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    onClick={() => { filtred("Bracelet") }}
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Bracelet Collection
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
                                <button className="cursor-pointer [border:none] p-0 bg-[transparent]  absolute top-[0px] left-[0px] text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
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
                                onClick={() => { filtredWithGender("Women") }}

                                className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                Women
                            </button>
                        </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[25px]">
                                <button
                                    onClick={() => { filtredWithGender("Men") }}
                                    className=" focus:text-violet-700 cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-poppins text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700">
                                    Men
                                </button>
                            </div>
                        </>)}

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
