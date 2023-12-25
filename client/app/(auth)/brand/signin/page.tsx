'use client'

import { useState } from 'react'
import Layout from '../../layout'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const SignIn = ()=> {
const [email,setEmail]= useState<string>()
const [password,setPassword]= useState<string>()
const router = useRouter()
const submit = async ()=>{
    if (!email || !password) return;
    const body = {
        email : email,
        password : password,
    }
    try {
       var res = await  axios.post('http://localhost:4000/brand/signin',body);
       window.localStorage.setItem('current',JSON.stringify(res.data))
       router.push('/home')
    } catch (error) {
        console.log(error);
        
    }
}


    return (
        <div>


        <div className=" flex flex-col-2 gap-64 items-center lg:m-32">
        <div className="flex flex-col lg:block hidden   ">
        
        <img
            src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className=" w-[400px] h-[460px]"
          />       
          <div className="font-sans font-semibold text-xl text-center">
            Explore the world of meta fashion
          </div>
           </div>

           <div className="w-[527px] h-[699px] bg-white bg-opacity-20 rounded-[10px] flex-col flex items-center gap-6">
            <div className="flex flex-col items-start m-4 gap-10 ">
                <div className="text-center text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">Sign In</div>
                <div><span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">New user?</span> <Link href="/auth/signup"><span className="text-indigo-500 text-lg font-medium font-['SF Pro Display'] tracking-tight"> Create an account</span></Link></div>
                <div className="flex flex-col gap-14">
                    <div>

                <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Email Address</div>
                <input  
                 
                 onChange={(e)=>setEmail(e.target.value)}
                className="h-8  bg-white bg-opacity-0 w-[459px]"/>
                <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
                    </div>
                    <div>

                <div className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">Password</div>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                 className="h-8 bg-white bg-opacity-0 w-[459px]"/>
                <div className="w-[459px] h-[0px] border border-white border-opacity-50"></div>
                    </div>
                </div>
            </div>
                <button 
                onClick={submit}
                className=" relative  float-right w-[113px] h-8 px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex">
    <div className="text-white text-base font-normal font-['Poppins']">Continue</div> 
</button>
        

          <div className='flex items-center relative right-10 flex-col'>

          </div>
           </div>
    
  </div>

                    </div>
    )
}
export default SignIn