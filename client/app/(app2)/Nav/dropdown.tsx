import Link from "next/link";
const DropDown = ({current,setCurrent}:any)=>{
    console.log(current);
    
    return (
        <div className="  w-[200px] border-r border-r-gray-700 absolute bg-black text-white  ">
            <ul>
                <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">Home</li>
                <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">

                <Link
            href="/all-products"
            className=" sm:inline text-white hover:underline"
            >
            Products
          </Link>
              </li>
              <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">

          <Link
            href="/about"
            className=" sm:inline text-white hover:underline"
            >
            About
          </Link>
              </li>
              <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">

          <Link
            href="/Dashboard"
            className=" sm:inline text-white hover:underline"
            >
            Dashboard
          </Link>
              </li>
              <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">

          <Link
            href="/faq"
            className=" sm:inline text-white hover:underline"
            >
            FAQ
          </Link>
              </li>
         
                { current ?
                   <Link href={"/auth/signin"}>
                <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950">Login</li>
                   </Link>
                :
                <Link href={"/home"}>
                <li className="p-4 border-b border-b-gray-700 hover:bg-slate-950" 
                
                onClick={()=>{setCurrent(true) 
                 window.localStorage.clear()
                }}
                >Logout</li>
                </Link>
}
            </ul>
        </div>
    )
}

export default DropDown;