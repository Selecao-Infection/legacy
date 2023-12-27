'use client'

import { useState } from 'react'
import Layout from '../../layout'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Google from '../google'
import Facebook from './facebook'
import Link from 'next/link'
import Image from "next/image";
import ImgSignin from "../../../public/image 8.png"
import { Toaster, toast } from 'sonner'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignIn = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    
    const router = useRouter()

    const submit = async () => {
        if (!email || !password){ 
            toast.warning("Please fill all fields.")
            return;
        }
        const body = {
            email: email,
            password: password,
        }
        try {
            var res = await axios.post('http://localhost:4000/api/user/signin', body);
            window.localStorage.setItem('current', JSON.stringify(res.data))
            router.push('/home')

            toast.success('Successfully')
        } catch (error) {
            console.log(error);
            toast.error("Wrong Email or Password !!")
            

        }
    }


    return (
        <>


            <div className="h-full w-full relative flex flex-col p-6  lg:flex-row gap-20 overflow-hidden items-center  lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:pl-2.5 sm:pr-2.5 ">
                <div className=" relative flex flex-col w-full  items-center justify-center  ">


                    <h1 className=" p-7 min-w-[350px] lg:max-w-[950px] md:max-w-[950px] text-3xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        Explore The World Of
                        <span className="text-transparent bg-clip-text bg-gradient-to-r ml-4 from-indigo-600 to-sky-500 ">
                            Meta Fashion
                        </span>

                    </h1>

                    <div className=" hidden lg:flex  h-full  items-center justify-center ">
                        <Image
                            src={ImgSignin}
                            alt=""
                            className=" items-center justify-center"
                        />
                    </div>


                </div>

                <div className="max-w-[550px] max-h-[710px] w-full h-full p-5 bg-white bg-opacity-20 rounded-[10px] flex-col flex items-center gap-6">


                    <div className="flex flex-col h-full w-full relative  items-start p-5 gap-10 ">
                        <div className="text-center text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
                            Sign In
                        </div>
                        <div>
                            <span className="text-white text-lg font-semibold font-['SF Pro Display'] tracking-tight">
                                Don't have an account yet New?
                            </span>
                            <Link href="/auth/signup">
                                <span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">
                                    <a className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline' >
                                        Create An Account
                                    </a>
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-col  w-full gap-14">

                            <div>
                                <div className=" w-full   text-white text-lg font-semibold font-['SF Pro Display'] tracking-tight">Email Address</div>
                                <input
                                    type="email" name="Email" autoComplete="off" placeholder='Enter Your Email'
                                    onChange={(e) => setEmail(e.target.value)}
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
                        </div>
                    </div>

                    <div className=" relative flex flex-col w-full h-full gap-4 p-4 justify-start  items-center   ">
                        <div className=' flex items-center w-full gap-4 justify-center relative  right-0 flex-col   ' >
                            <button
                                onClick={submit}
                                className=" w-full max-w-[250px] max-h-[56px] relative  bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce float-right    bg-gradient-to-bl from-purple-500 to-violet-700  justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-base  font-semibold  ">Continue</div>
                            </button>

                        </div>

                        <div className='font-semibold' >OR ?</div>

                        <div className='flex items-center w-full gap-4 justify-center relative  right-0 flex-col'>

                            <Google />
                            <div className='max-w-[400px]  ' >
                                <button className="flex w-full gap-3 cursor-pointer transform transition-all  ease-in-out text-white font-semibold bg-gradient-to-r   px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-200 hover:border-gray-800 hover:from-zinc-700 hover:to-transparent">

                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-2xl" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>


                                    Continue With Facebook
                                </button>

                            </div>

                            {/* <Facebook customRouter={router} /> */}
                        </div>

                    </div>
                 
                </div>

            </div>

        </>
    )
}
export default SignIn