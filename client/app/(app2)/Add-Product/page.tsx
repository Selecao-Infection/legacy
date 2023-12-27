'use client'

import React, { useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import { storage } from '../../../firebase'
import { ref, uploadBytes, uploadBytesResumable, listAll, getDownloadURL } from 'firebase/storage'
import "../all-products/index.css"
import { v4 } from 'uuid'
import { log } from "console";
import { Toaster, toast } from 'sonner'


interface ImageUpload {
    name: string;
    lastModified: number;
    lastModifiedDate: object;
    size: number;
    type: string;
    webkitRelativePath: string;
}




const AddProduct = () => {






    const [productName, setProductName] = useState<string>("");
    const [priceValue, setPriceValue] = useState<string>("");
    const [collections, setCollections] = useState<string>("");
    const [categories, setCategories] = useState<string>("")
    const [viewCollections, setViewCollections] = useState<boolean>(false)
    const [viewCategories, setViewCategories] = useState<boolean>(false)
    const [imgUpload, setImgUpload] = useState<any | ImageUpload | File | null>(null)
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<any>("")
    const [success, setSuccess] = useState<boolean>(true)
    const [successMsg, setSuccessMsg] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>("")
    const [warning, setWarning] = useState<boolean>(true)
    const [warningMsg, setWarningMsg] = useState<string>("")

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
        setDescription("")
        setViewCollections(false);
        setViewCategories(false);
    }


    const imageListRef = ref(storage, `Products/`)
    const uploadImage = () => {

        if (imgUpload == null) return;
        console.log(imgUpload, "image upload test");
        const imageRef = ref(storage, `Products/${imgUpload.name + v4()}`)
        const uploadTask = uploadBytesResumable(imageRef, imgUpload)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress, "progress");

            },
            (error) => {
                console.error(error, "Error From Upload Image Product");
                toast.error('Failed to Upload Image !!')
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL, "download");
                    setImage(downloadURL);
                    // console.log(image, "image");
                    // setSuccessMsg(`Successfully Image Uploaded`)
                    // setSuccess(true)
                    toast.success('Successfully Image Uploaded')


                }).catch((error) => {
                    console.log(error, "Error From Upload Image Product");
                    // setError(true)
                    // setErrorMsg('Failed to Upload Image')
                    toast.error('Failed to Upload Image !')
                })
            }
        )
    }



    const addProduct = () => {
        console.log(productName, "PRODUCT  NAME");
        console.log(parseFloat(priceValue), "price");
        console.log(collections, "collection");
        console.log(categories, "category");
        console.log(description, "desc");
        console.log(image, "image");

        if (productName && priceValue && collections && categories && description && image) {


            fetch('http://localhost:4000/api/post/product/create',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        productName: productName,
                        price: parseFloat(priceValue),
                        category: collections,
                        gender: categories,
                        description: description,
                        imageUrl: [image],
                        // brandId: window.localStorage.getItem("brandId")!,
                        brandId: "91f98168-376e-482a-9809-8cfe552d43ab"

                    })
                }).then((res) => {
                    console.log(res)
                    // alert("Added Successfully!");
                    // setSuccessMsg("Added Successfully!");
                    // setSuccess(true);
                    toast.success('Added Product Successfully!')

                    handleCancel()
                }).catch(() => {
                    // setErrorMsg("Something went wrong! Please try again.");
                    // setError(true)
                    toast.error("Something went wrong! Please try again.")
                })
        } else {
            // setWarning(true)
            // setWarningMsg("Please fill all fields.")
            toast.warning("Please fill all fields.")



        }
    }
    // setTimeout(() => {
    //     setSuccess(false);
    //     setError(false)
    //     setWarning(false)
    // }, 4000);

    return (
        <>

            {/* { success && <> <div className="success">
                <div className="success__icon">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fill-rule="evenodd"></path></svg>
                </div>
                <div className="success__title">{successMsg}</div>
                <div className="success__close"
                    onClick={() => { setSuccess(!success) }}
                ><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
            </div> 
            
            </>}
            { error && <>
            
<div className="error">
    <div className="error__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
    </div>
    <div className="error__title">{errorMsg}</div>
    <div
     onClick={() => { setError(!error) }}
    className="error__close"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
</div>
            </>}

            { warning && <>
                <div className="warning">
    <div className="warning__icon">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z" fill="#393a37"></path></svg>
    </div>
        <div className="warning__title">{warningMsg}</div>
    <div 
     onClick={() => { setWarning(!warning) }}
    className="warning__close"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
</div>
            </>} */}

            <div className=" h-full relative overflow-hidden flex flex-row items-center justify-center py-[38px] px-[35px] box-border text-left text-[29px] text-white font-semibold font-poppins lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border">
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
                                        className="[border:none] [outline:none] font-semibold   text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
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
                                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                                    +
                                </div>
                            </div>
                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>


                        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[175px]">
                            <button
                                className="  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700 cursor-pointer [border:none] py-2.5 px-[5px] bg-[transparent] self-stretch flex flex-row items-start justify-start "
                                onClick={() => setViewCategories(!viewCategories)}
                            >
                                <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[30px]">

                                    <button className="  cursor-pointer [border:none] p-0 bg-[transparent]     font-poppins text-white text-left  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700    h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[535px] max-h-[40px]">
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
                                    className="    focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                    onClick={() => { setCategories("Women") }}
                                >
                                    Women
                                </button>
                            </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCategories("Men") }}
                                    >
                                        Men
                                    </button>
                                </div> </>}



                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>






                        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] min-h-[50px] max-h-[250px]">
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



                            {viewCollections && <>  <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                <button
                                    className=" focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                    onClick={() => { setCollections("Watch") }}
                                >
                                    Watch Collection
                                </button>
                            </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Ring") }}
                                    >
                                        Ring Collection
                                    </button>
                                </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Chain") }}
                                    >
                                        Chain Collection
                                    </button>
                                </div>

                                <div className=" self-stretch flex flex-row items-center justify-start py-0 px-[5px]">
                                    <button
                                        className=" focus:text-violet-700 [border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-h-[30px] cursor-pointer  p-0  hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-violet-700"
                                        onClick={() => { setCollections("Bracelet") }}
                                    >
                                        Bracelet Collection
                                    </button>
                                </div>
                            </>}

                            <div className="self-stretch relative bg-half-white box-border h-px max-h-[1px] border-t-[1px] border-solid border-white" />
                        </div>




                        <div className="self-stretch flex flex-row items-start justify-between">
                            <div className="self-stretch flex-1 flex flex-row items-start justify-between max-h-[250px]">
                                <textarea
                                    className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] self-stretch flex-1 relative text-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
                                    placeholder="Descreption Product 🤍"
                                    name="postContent"
                                    // type="text"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </div>
                            <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                                +
                            </div>
                        </div>





                        <div className="w-full items-center justify-center h-full gap-[50px] flex flex-col " >
                            <label htmlFor="file" className="custum-file-upload">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                                </div>
                                <div className="text">
                                    <span>{imgUpload ? imgUpload.name : 'Click to upload image'}</span>

                                </div>

                                <button
                                    onClick={() => {
                                        uploadImage()
                                        // handelImageUpload()
                                    }}
                                    className="botao">
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
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setImgUpload(event.target.files?.[0])
                                        // console.log(event.target.files[0]);



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
                                <button
                                    onClick={() => { addProduct() }}
                                    className="cursor-pointer [border:none] py-[7.4px] px-[14.7px] bg-[transparent] flex-1 rounded-5xs-33 text-white-500 bg-violet-600   rounded-full w-full  p-2 h-[47px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-violet-900">
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
