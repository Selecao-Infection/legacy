import { MdFacebook } from "react-icons/md";
import { useState } from "react";
import axios from "axios"
const Facebook = ()=>{

    


    return(
        <div>
            <button  className=" iphone:px-7 text-[100%] bg-facebook   flex items-center gap-2 text-white  rounded-full px-[14%] mx-auto py-3 mt-4  whitespace-nowrap"> <MdFacebook   className="text-2xl"/> Continue With Facebook</button>
        </div>  
    )
}
export default Facebook;    