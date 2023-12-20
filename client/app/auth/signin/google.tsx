
"use client"
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../../../firebase'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
 const Google =  (props:any)=>{
    const router = useRouter()
    const signInWithGoogle = async () => {
    console.log('heheheh');
    
    
    try {
      const provider = new GoogleAuthProvider();
      var emails : any
const userCredential = await signInWithPopup(auth, provider);
      const {displayName,email,photoURL} = userCredential.user.providerData[0]
    //   setEmails(email)
    emails= email
       const user = {
        userName : displayName,
        email: email,
        pdp: photoURL,
       }
      const res = await axios.post('http://localhost:4000/api/user/google',user)
console.log(res.data);;

    } catch (error:any) {
     const errorCode = error.response.data.code
     
     if (errorCode === "P2002")  {
           axios.post("http://localhost:4000/api/user/one",{email:emails}).then( async(res)=>{
            
           await window.localStorage.setItem('current',JSON.stringify(res.data))    
           router.push('/')
           })   
              
        }
    }
}


    return (
        <div>
            <button 
            onClick={signInWithGoogle} 
            className=" iphone:px-7 text-[100%] bg-facebook   flex items-center gap-2 text-white  rounded-full px-[14%] mx-auto py-3 mt-4  whitespace-nowrap"> <FcGoogle   className="text-2xl"/> Continue With Google</button>
        </div>
    )
}

export default Google