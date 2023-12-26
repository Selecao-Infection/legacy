"use client"
import { useEffect,useState } from "react";
import axios from "axios";
const Replies = (props:any)=>{
    const [replies,setReplies] = useState<any>()
    const [show,setShow]=useState<boolean>(false)
    const [content,setContent]=useState<string>()
useEffect(()=>{
    axios.get(`http://localhost:4000/replies/${props.id}`).then((res)=>{
        
        setReplies(res.data)
        
      }).catch((err)=>{
        console.log(err)
        
      })
},[]);


const PostReply = ()=>{
    
    const body ={
        questionId:props.id,
        userId : props.current.id,
        content :  content,
    }
    try {
  axios.post('http://localhost:4000/replies/create',body)

    }catch(err){
        console.log(err);
    }
}

return (
    <div>


    <button 
    onClick={()=>setShow(!show)}
    className="text-right text-blue-500"> { replies && replies.length} Replies</button>
   {  show && 
   <div className="flex flex-col gap-2 w-[200px]">
     {replies.map((e:any)=>{
    
    return (
        <div>
        <div className="p-3">
                        <div className="flex gap-3 items-center">
                            <img src={e.User.pdp}
                                    className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"/>
                            <h3 className="font-bold">
                               {e.User.userName}
                                
                            </h3>
                        </div>
                        <p className="text-gray-600 mt-2">
                           {e.content}
                        </p>
                    </div>
        </div>
    )
   }
   
   )}
   <div className="flex flex-wrap gap-4 w-[320px]">

 <input
                                       onChange={(e)=>setContent(e.target.value)}
                                        className=" w-[500px] font-medium font-poppins text-xl bg-white bg-opacity-10 self-stretch flex-1 relative text-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
                                        placeholder="Reply..."
                                        type="text"
                                        
                                        />
                                        <button 
                                        onClick={()=>PostReply()}
                                        type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Post</button>


                                        </div>
    </div>
    
   }
    </div>
)
}

export default Replies