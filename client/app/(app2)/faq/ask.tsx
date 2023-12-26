import { useState } from "react"
import axios from "axios";
import { MdLineStyle } from "react-icons/md";
const Ask = (props:any)=>{      


    
    const [question,setQuestion]=useState<string>()
    const poseQuestion = ()=>{
        axios.post("http://localhost:4000/api/question/create",{
            content: question,
            userId: props.current.id,
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return  (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ask our Community</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">Have a Question on Your mind ? Don't hesitate to ask US</p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label  className="sr-only">Question</label>
                <input
                 onChange={(e)=>setQuestion(e.target.value)}
                id="email-address" name="email" type="email"  required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your question"/>
                <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"µ
                onClick={poseQuestion}
                >Ask</button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              
          
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
        </div>
      </div>
)
}

export  default Ask