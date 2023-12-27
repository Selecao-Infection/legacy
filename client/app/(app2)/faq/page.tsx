
"use client"
import axios from "axios"
import List from "./questionList"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import Ask from "./ask"
const Faq = ()=>{
  const [current,setCurrent]=useState<any>()
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("current") as string)) {
      setCurrent(
        jwtDecode(JSON.parse(window.localStorage.getItem("current") as string))
      );
    }
  }, []);
    return (
      <div className=" text-white m-4 flex flex-col items-center">
        <Ask current={current}/>
        <List current={current}/>
      
      </div>
    )

}

export default Faq