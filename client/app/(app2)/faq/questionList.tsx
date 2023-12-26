"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Replies from "./replies"
const List = (props:any)=>{
    const [questions,setQuestions]= useState<[]>([])
    useEffect(()=>{
      axios.get("http://localhost:4000/api/question").then((res)=>{
        setQuestions(res.data)
        
      }).catch((err)=>{
        console.log(err);
        
      })
    },[])
    return (
        <div className="p-6 flex flex-col gap-10  w-[400px]">

<div className="  h-[50px] rounded flex items-center">
        <div className="flex flex-wrap gap-10">
            <h1 className="text-4xl">All questions</h1>
            </div>
        
</div>
<div className="flex flex-col gap-10  ">
{questions && questions.reverse().map((e:any)=>{
    
    return (<div className="flex w-full justify-between border rounded-md">

    <div className="p-3">
        <div className="flex gap-3 items-center">
            <img src={e.User.pdp}
                    className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"/>
            <h3 className="font-bold">
                {e.User.userName}
                
            </h3>
        </div>
        <p className="text-gray-600 mt-2">
            {e.content} ?
        </p>
        <Replies current={props.current} id={e.id}/>
    </div>


    <div className="">
        <div>
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div>
        <div>
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    </div>

</div>



)
})}
</div>
        </div>
    )
}

export default List;