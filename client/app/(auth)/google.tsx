import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from 'react-query';
import { useContext } from "react";
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
    } catch (error:any) {
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
        <button
          onClick={() => signInWithGoogle()}
          className="iphone:px-7 text-[100%] bg-facebook flex items-center gap-2 text-white rounded-full px-[14%] mx-auto py-3 mt-4 whitespace-nowrap"
        >
          <FcGoogle className="text-2xl" /> Loading...
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="iphone:px-7 text-[100%] bg-facebook flex items-center gap-2 text-white rounded-full px-[14%] mx-auto py-3 mt-4 whitespace-nowrap"
      >
        <FcGoogle className="text-2xl" /> Continue With Google
      </button>
    </div>
  );
};

export default Google;
