
"use client"
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import Link from "next/link";
import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { storage, auth } from '../../../../firebase'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Image from "next/image";
import ImgSignUp from "../../../../public/image 8.png"
import '../../style.css'
import { Toaster, toast } from 'sonner'
const SignUp = () => {

  const router = useRouter()
  const [brandName, setBrandName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [pdp, setPdp] = useState<any>("");
  const [cover, setCover] = useState<any>("");

  const submit = async () => {
    if (!brandName || !email || !password) {
      toast.warning("Enter All Information, Please");
      return;
    }

    const body = {
      brandName: brandName,
      email,
      password,
      imageUrl: pdp,
      cover
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/brand/create",
        body
      );

      if (response.data) {
        window.localStorage.setItem('current', JSON.stringify(response.data))
        router.push('/brand/signin')
        toast.success('Successfully')

      }

    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Wrong Email or Password !!")
      throw error;

    }
  };

  const uploadPdp = () => {
    // console.log('heeeeere');

    if (pdp === "") {
      toast.warning("Enter All Information, Please");
      setPdp("")
      return;
    }
    const imageRef = storageRef(storage, `products/dsqdqd`);

    uploadBytes(imageRef, pdp)
      .then((snapshot: any) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {

            setPdp(url);
            toast.success('Successfully')


          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong! Please try again.")

          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong! Please try again.")


      });
  };
  const uploadCover = () => {
    console.log('heeeeere');

    if (cover === "") {
      toast.warning("Enter All Information, Please");
      setCover("")
      return;
    }
    const imageRef = storageRef(storage, `products/dsqdqd`);

    uploadBytes(imageRef, cover)
      .then((snapshot: any) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setCover(url);
            toast.success('Successfully')
            console.log(url, 'done');

          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong! Please try again.")

          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong! Please try again.")

      });
  };

  const submitPic = async () => {

    await uploadPdp()
    await uploadCover()
  }
  return (
    <>
      <div className="h-full w-full relative flex flex-col p-6  lg:flex-row gap-20 overflow-hidden items-center  lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:pl-2.5 sm:pr-2.5 ">
        <div className="relative flex flex-col w-full  items-center justify-center  ">


          <h1 className=" p-7 min-w-[350px] lg:max-w-[950px] md:max-w-[950px] text-3xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Explore The World Of
            <span className="text-transparent bg-clip-text bg-gradient-to-r ml-4 from-indigo-600 to-sky-500 ">
              Meta Fashion
            </span>

          </h1>

          <div className=" hidden lg:flex  h-full  items-center justify-center ">
            <Image
              src={ImgSignUp}
              alt=""
              className=" items-center justify-center"
            />
          </div>


        </div>

        <div className="max-w-[550px] max-h-[810px] w-full h-full p-5 bg-white bg-opacity-20 rounded-[10px] flex-col flex items-center gap-0">


          <div className="flex flex-col h-full w-full relative  items-start p-5 gap-6 ">
            <div className="text-center text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
              Sign Up
            </div>
            <div>
              <span className="text-white text-lg font-semibold font-['SF Pro Display'] tracking-tight">
                Already a Brand?
              </span>
              <Link href="/brand/signin">
                <span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">
                  <a className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline' >
                    Sign In
                  </a>
                </span>
              </Link>
            </div>
            <div className="flex flex-col  w-full gap-6">

              <div>
                <div className=" w-full   text-white text-lg font-semibold font-['SF Pro Display'] tracking-tight">
                  Email Address
                </div>
                <input
                  type="email" name="Email" autoComplete="off" placeholder='Enter Your Email'
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-8  bg-white bg-opacity-0 w-full" />
                <div className="w-full h-[0px] border border-white border-opacity-50"></div>
              </div>

              <div>
                <div className=" w-full   text-white text-lg font-semibold font-['SF Pro Display'] tracking-tight">
                  Brand Name
                </div>
                <input
                  type="name" name="name" autoComplete="off" placeholder='Enter Your Brand Name'
                  onChange={(e) => setBrandName(e.target.value)}
                  className="h-8  bg-white bg-opacity-0 w-full" />
                <div className="w-full h-[0px] border border-white border-opacity-50"></div>
              </div>



              <div >
                <div className="text-white text-lg font-semibold  tracking-tight">
                  Password
                </div>
                <div className="relative flex flex-row  w-full gap-1  " >
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    name="Name" placeholder='Enter Your Password '
                    className="h-8 bg-white bg-opacity-0 w-full" />

                  <div className=" w-full relative justify-center max-w-[30px] "
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>

                <div className="w-full h-[0px] border border-white border-opacity-50"></div>
              </div>



              <div className="relative flex flex-row h-full w-full justify-between px-5 " >


                <form className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>{pdp ? pdp.name : "Brand Cover "}</p>
                      <span className="browse-button">Upload Cover</span>
                    </div>
                    <input
                      onChange={(e: any) => setPdp(e.target.files[0])}
                      id="file"
                      type="file" />
                  </label>
                </form>



                <form className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>  {cover ? cover.name : "Brand Picture"}</p>
                      <span className="browse-button">Upload Picture</span>
                    </div>
                    <input
                      onChange={(e: any) => setCover(e.target.files[0])}
                      id="file"
                      type="file" />
                  </label>
                </form>


              </div>
            </div>
          </div>

          <div className=" relative flex flex-col w-full h-full gap-8 p-4 justify-between  items-center   ">

            <div className='flex items-center w-full gap-4 justify-center relative  right-0 flex-col'>
              <div className='max-w-[200px]   ' >
                <button
                  onClick={() => submitPic()}
                  className="flex w-full gap-2 cursor-pointer transform transition-all  ease-in-out text-xs text-white font-semibold bg-gradient-to-r  items-center justify-center  px-2 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-200 hover:border-gray-800 hover:from-zinc-700 hover:to-transparent">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="30px" width="30px" className="text-2xl" >
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                    ></path>
                  </svg>
                  Upload Your Images
                </button>

              </div>
            </div>


            <div className=' h-full flex items-center w-full gap-4 justify-center relative  right-0 flex-col   ' >
              <button
                onClick={submit}
                className=" w-full max-w-[240px] max-h-[53px] relative  bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce float-right    bg-gradient-to-bl from-purple-500 to-violet-700  justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base  font-semibold  ">Create Account</div>
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default SignUp

















// <div className=" flex flex-col-1 gap-40 items-center">
//         <div className="flex flex-col lg:block hidden">

//           <img
//             src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
//             alt=""
//             className=" w-[400px] h-[460px]"
//           />
//           <div className="font-sans font-semibold text-xl text-center">
//             Explore the world of meta fashion
//           </div>
//         </div>

//         <div className="w-[490px] h-[650px] bg-white bg-opacity-20 rounded-[10px] m-4">
//           <div className="flex flex-col items-start m-4 gap-5">
//             <div className="text-center text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">Sign Up</div>
//             <div><span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Already a Brand?</span><span className="text-indigo-500 text-lg font-normal font-['SF Pro Display'] tracking-tight">
//             </span><span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">  Sign In</span></div>
//             <div className="flex flex-col ">
//               <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Email Address</div>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-white bg-opacity-0 h-10" />
//               <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
//             </div>
//             <div className="flex flex-col ">
//               <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Brand Name</div>
//               <input
//                 onChange={(e) => setBrandName(e.target.value)}
//                 className="bg-white bg-opacity-0 h-10" />
//               <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
//             </div>


//             <div className="flex flex-wrap gap-20">

//               <div className="flex flex-col ">
//                 <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Brand Picture</div>
//                 <input
//                   onChange={(e: any) => setCover(e.target.files[0])}
//                   type="file"
//                   className="bg-white bg-opacity-0 h-10 w-[170px]" />
//                 <div className="w-[170px] h-[0px] border border-white border-opacity-50"></div>
//               </div>
//               <div className="flex flex-col ">
//                 <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Brand Cover</div>
//                 <input
//                   onChange={(e: any) => setPdp(e.target.files[0])}
//                   type="file"
//                   className="bg-white bg-opacity-0 h-10 w-[170px]" />
//                 <div className="w-[170px] h-[0px] border border-white border-opacity-50"></div>
//               </div>
//               <button className="flex items-center" onClick={() => submitPic()}>Submit Pictures</button>
//             </div>




//             <div className="flex flex-col ">
//               <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
//                 Password
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="bg-white bg-opacity-0 h-10" />
//               <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
//               <div className="relative bottom-5 left-[440px]"
//                 onClick={() =>
//                   setShowPassword((prev) => !prev)
//                 }
//               >
//                 {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//               </div>
//             </div>


//           </div>


//           <div className="flex ">

//           </div>
//           <button
//             onClick={submit}
//             className=" float-right w-[175px] h-[47px] px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
//             <div className="text-white text-[17px] font-medium font-['Poppins']">Create Account</div>
//           </button>

//         </div>

//       </div>

