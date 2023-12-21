
"use client"
import { MdFacebook } from "react-icons/md";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {FacebookAuthProvider, signInWithPopup} from 'firebase/auth'
import {  auth } from '../../../firebase';
import axios from 'axios';

// Facebook component
const Facebook = (props: any) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const signInWithFacebook = async () => {
      var emails:any 
    try {
      const provider = new FacebookAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = userCredential.user.providerData[0];
      emails = email
      const userData = {
        userName: displayName,
        email,
        pdp: photoURL,
      };

      const res = await axios.post('http://localhost:4000/api/user/facebook', userData);
      console.log(res);

    } catch (error: any) {
        console.log(error,"heeere");
        
      const errorCode = await error.response.data.code;

      if (errorCode === 'P2002') {
        axios.post('http://localhost:4000/api/user/one', { email: emails }).then(async (res) => {
          await window.localStorage.setItem('current', JSON.stringify(res.data));
          await router.push('/');
        });
      }
    }
  };

  return (
    
<div>
<button   onClick={signInWithFacebook}
className=" iphone:px-7 text-[100%] bg-facebook   flex items-center gap-2 text-white  rounded-full px-[14%] mx-auto py-3 mt-4  whitespace-nowrap"> <MdFacebook   className="text-2xl"/> Continue With Facebook</button>
</div>  
  );
};

export default Facebook;

