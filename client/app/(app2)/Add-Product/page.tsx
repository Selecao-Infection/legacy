'use client'

import React, { useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import { storage } from '../../firebase'
import { ref } from 'firebase/storage'

interface ImageUpload {
    name : string;
}




const AddProduct = () => {

    const uploadImage = ()=>{
        if(imgUpload == null ) return;
    const imageRef = ref(storage,`Products/${imgUpload.name}`)
    }




    const [productName, setProductName] = useState<string>("");
    const [priceValue, setPriceValue] = useState<string>("");
    const [collections, setCollections] = useState<string>("");
    const [categories, setCategories] = useState<string>("")
    const [viewCollections, setViewCollections] = useState<boolean>(false)
    const [viewCategories, setViewCategories] = useState<boolean>(false)
    const [imgUpload, setImgUpload] = useState< any | ImageUpload |null >(null)


    const handleCurrencyInputChange = (value: string | undefined) => {

        if (value !== undefined) {
            setPriceValue(value);

        }
    };
    const handleCancel = () => {
        setProductName("")
        setPriceValue("")
        setCollections("")
        setCategories("")
        setViewCollections(false);
        setViewCategories(false);
    }




    const addProduct = () => {
        // http://localhost:4000/api/post/product/create
        fetch('http://localhost:4000/api/products',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    product_name: productName,
                    price: parseFloat(priceValue),
                    collectionsId: viewCollections ? window.localStorage.getItem("collectionID")! : null,
                    categoriesId: viewCategories ? window.localStorage.getItem("categoryID")! : null
                })
            }).then((res) => {
                console.log(res)
                alert("Added Successfully!");
                handleCancel()
            });

    }

    return (
        <>
            <div className=" h-full relative overflow-hidden flex flex-row items-center justify-center py-[38px] px-[35px] box-border text-left text-[29px] text-white font-poppins lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border">
                <div className=" h-full max-w-[660px] self-stretch flex-1 rounded-[20px] bg-gray-700 flex flex-col items-start justify-start py-[59px] px-[38px] box-border gap-[50px] min-w-[320px] sm:w-[360px] sm:self-stretch sm:h-full">
                    <div className="w-[237px] flex flex-row items-center justify-start gap-[20px]">
                        <img
                            className="relative w-10 h-10 object-cover"
                            alt=""
                            src="/addproduct.png"
                        />
                        <div className="self-stretch relative font-semibold inline-block w-[197px] shrink-0">
                            Add Product
                        </div>
                    </div>
                    <div className="w-full flex-1 flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[50px] min-w-[250px] max-w-[586px] text-xl lg:pl-5 lg:pr-5 lg:box-border">
                        <div className="self-stretch h-[50px] flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[50px]">
                            <div className="self-stretch flex flex-row items-start justify-between">
                                <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[50px]">
                                    <input
                                        className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
                                        placeholder="Product Name"
                                        type="text"
                                        value={productName}
                                        onChange={(event) => setProductName(event.target.value)}
                                    />
                                </div>
                                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                                    +
                                </div>
                            </div>
                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[50px]">

                            <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[50px]">
                                <CurrencyInput
                                    className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
                                    placeholder="Price"
                                    type="text"
                                    inputMode="decimal"
                                    value={priceValue}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    prefix="$"
                                    onValueChange={(value: string | undefined) => handleCurrencyInputChange(value)}
                                />
                                <img
                                    className="relative w-3 h-1.5 object-cover"
                                    alt=""
                                    src="/Vector (1).png"
                                />
                            </div>
                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>


                        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[175px]">
                            <button
                                className="  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[5px] bg-[transparent] self-stretch flex flex-row items-start justify-start "
                                onClick={() => setViewCategories(!viewCategories)}
                            >
                                <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[30px]">

                                    <button className=" cursor-pointer [border:none] p-0 bg-[transparent]     font-poppins text-white text-left  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700    h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[535px] max-h-[40px]">
                                        Categorie
                                    </button>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="/Vector (1).png"
                                    />
                                </div>
                            </button>



                            {viewCategories && <>  <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                <button
                                    className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                    onClick={() => { setCategories("Women") }}
                                >
                                    Women
                                </button>
                            </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCategories("Men") }}
                                    >
                                        Men
                                    </button>
                                </div> </>}



                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>



                        <div className=" self-stretch h-[250px] flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[250px]">
                            <button
                                className="  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[5px] bg-[transparent] self-stretch flex flex-row items-start justify-start "
                                onClick={() => setViewCollections(!viewCollections)}
                            >
                                <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[30px]">

                                    <button className=" cursor-pointer [border:none] p-0 bg-[transparent]     font-poppins text-white text-left  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700    h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[535px] max-h-[40px]">
                                        Collections
                                    </button>
                                    <img
                                        className="relative w-3 h-1.5 object-cover"
                                        alt=""
                                        src="/Vector (1).png"
                                    />
                                </div>
                            </button>
                            {viewCollections && <>
                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Watch") }}
                                    >
                                        Watch Collection
                                    </button>
                                </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Ring") }}
                                    >
                                        Ring Collection
                                    </button>
                                </div>
                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Chain") }}
                                    >
                                        Chain Collection
                                    </button>
                                </div>
                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Bracelet") }}
                                    >
                                        Bracelet Collection
                                    </button>
                                </div> </>}
                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>

                        <div className="w-full items-center justify-center h-full gap-[50px] flex flex-col " >
                            <label htmlFor="file" className="custum-file-upload">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                                </div>
                                <div className="text">
                                    <span>Click to upload image</span>

                                </div>

                                <button className="botao">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mysvg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                                    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                            <g id="Interface / Download">
                                                <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </g> </g>
                                    </svg>
                                    <span className="texto">Upload Image</span>
                                </button>
                                <input
                                    id="file"
                                    type="file"
                                    onChange={(event : React.ChangeEvent<HTMLInputElement> ) => {
                                        //  setImgUpload(event.target.files[0])
                                        //  console.log(typeof event.target.files[0],"yhuihu");
                                        
                                        

                                    }}
                                />
                            </label>
                            <div className="max-w-[450px] w-full flex flex-row text-center items-center justify-center content-center " >
                                <button
                                    onClick={() => { handleCancel() }}

                                    className=" max-w-[100px] cursor-pointer [border:none] py-[7.4px] px-[14.7px] bg-[transparent] flex-1 rounded-5xs-33 text-white-500   rounded-full w-full  p-2 h-[47px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-violet-900">

                                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-center inline-block w-full h-[21.9px] shrink-0 max-w-[100px] ">
                                        Cancel


                                    </div>
                                </button>
                                <button className="cursor-pointer [border:none] py-[7.4px] px-[14.7px] bg-[transparent] flex-1 rounded-5xs-33 text-white-500 bg-violet-600   rounded-full w-full  p-2 h-[47px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-violet-900">
                                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-center inline-block w-full h-[21.9px] shrink-0">
                                        Submit
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

export default AddProduct