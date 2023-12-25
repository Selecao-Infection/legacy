
"use client"
import { FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useQuery } from 'react-query';
import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import BasicDatePicker from "./datepicker";
const SignUp = () => {
    
    const router = useRouter()
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword,setShowPassword]=useState<boolean>(false)
    console.log(showPassword);
    
    const submit = async () => {
        if (!name || !lastName || !email || !password) {
          alert("Enter all information, please");
          return;
        }
    
        const body = {
          userName: `${name} ${lastName}`,
          email,
          birthday: birthday,
          password,
        };
    
        try {
          const response = await axios.post(
            "http://localhost:4000/api/user/create",
            body
          );
          
          if ( response.data){
            window.localStorage.setItem('current',JSON.stringify(response.data))
            router.push('/home')
          }
          
        } catch (error) {
          console.error("Error submitting data:", error);
          throw error;
        }
      };
    
  

    return (

        <div className=" flex flex-col-1 gap-40 items-center">
            <div className="flex flex-col lg:block hidden">
 
                <img
                    src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                    className=" w-[400px] h-[460px]"
                />
                <div className="font-sans font-semibold text-xl text-center">
                    Explore the world of meta fashion
                </div>
            </div>

            <div className="w-[490px] h-[650px] bg-white bg-opacity-20 rounded-[10px] m-4">
                <div className="flex flex-col items-start m-4 gap-5">
                    <div className="text-center text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">Sign Up</div>
                    <div><span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Already a Member?</span><span className="text-indigo-500 text-lg font-normal font-['SF Pro Display'] tracking-tight">
                    </span><span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight">  Sign In</span></div>
                    <div className="flex flex-col ">
                        <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Email Address</div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white bg-opacity-0 h-10" />
                        <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
                    </div>
                    <div
                        className="flex flex-wrap gap-4"
                    >
                        <div>
                            <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Full Name</div>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className="bg-white bg-opacity-0 h-10" />

                            <div className="w-[170px] h-[0px] border border-white border-opacity-50"></div>
                        </div>
                        <div>
                            <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">LastName</div>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                className="bg-white bg-opacity-0 h-10" />

                            <div className="w-[170px] h-[0px] border border-white border-opacity-50"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Password</div>
                        <input
                           type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-white bg-opacity-0 h-10" />
                        <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
                            <div className="relative bottom-5 left-[440px]" 
                             onClick={() =>
                                setShowPassword((prev) => !prev)
                            }
                                >
                               { showPassword ? <FaRegEyeSlash/> : <FaRegEye/> }
                            </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1>BIRTH DATE</h1>

                        <div className="">
                        <BasicDatePicker setDate={setBirthday}/>
                        </div>

                    </div>
                </div>


                <div className="flex ">

                </div>
                <button
                    onClick={submit}
                    className=" float-right w-[175px] h-[47px] px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[17px] font-medium font-['Poppins']">Create Account</div>
                </button>
                
            </div>

        </div>
    )
}

export default SignUp