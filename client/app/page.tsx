'use client'

import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{

    console.log(JSON.parse(window.localStorage.getItem('current') as string))
  },[])
  
  return (
    <div>
     
    </div>
  )
}
