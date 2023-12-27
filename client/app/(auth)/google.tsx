import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from 'react-query';
import { useContext } from "react";
import IsLoading from "../(app2)/all-products/IsLoading";

const Google = () => {

  const router = useRouter();
  const signInWithGoogle = async () => {

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = userCredential.user.providerData[0];
      const user = {
        userName: displayName,
        email: email,
        pdp: photoURL,
      };
      const res = await axios.post('http://localhost:4000/api/user/google', user);
      await window.localStorage.setItem('current', JSON.stringify(res.data));

      await router.push('/home');
    } catch (error: any) {
      const errorCode = error.response?.data?.code;

      if (errorCode === "P2002") {
        axios.post("http://localhost:4000/api/user/one", { email: error.email }).then(async (res) => {
          await window.localStorage.setItem('current', JSON.stringify(res.data));
          await router.push('/home');
        });
      }
    }
  };

  const { isLoading } = useQuery('test', signInWithGoogle, {
    enabled: false, // Don't automatically execute the query
  });

  if (isLoading) {
    return (
      <div>
       <IsLoading/>
      </div>
    );
  }

  return (
    <div className='max-w-[400px]  ' >
      <button
        onClick={() => signInWithGoogle()}
        className="  flex w-full gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r   px-[39px] py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-200 hover:border-gray-800 hover:from-zinc-700 hover:to-transparent iphone:px-7 text-[100%] bg-facebook  items-center     mx-auto  mt-0 whitespace-nowrap"
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="text-2xl" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
           c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
            C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
             c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
            c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>

        Continue With Google
      </button>



    </div>
  );
};

export default Google;
