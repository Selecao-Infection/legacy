"use client"

import React,{useState}from "react";
import { FaCamera } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ProfilepicturePopUp from "./profilepicturePopUp";

const Page = () => {

  const [openPopup, setOpenPopup] = useState<boolean>(false);
const  [content ,setContent] = useState<string>("")
const []

const handlePostClick = () => {
  const post = {
  content:content
  , imageUrl, userId
  };
  axios.post("http://localhost:5001/api/posts/createPost", post)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  window.location.reload();
};
const handleClosePoP = ()=>setOpenPopup(!openPopup)
  return (
    <>
      {/* Banner */}
      <div className=" mb-[10px] relative">
        <div className="flex justify-center   h-[450px]  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKKCRYdlQpWv277oSb7NgSUNCj03REe-yUQ&usqp=CAU"
            alt=""
            className=" "
          />
           <button
                
                className="rounded-full md:h-9 md:w-9 bg-violet-700 p-3 flex absolute top-[79%] left-[73%] transform -translate-y-1/2 "
              >
                <MdEdit className="text-white" />
              </button>
        </div>

        {/* Avatar */}
        <div className="flex items-center justify-center  mb-[20px]">
          <div className="bg-white w-[120px] h-[120px] rounded-full p-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu5tpCVXnuH0YxC-ljV2i3GublGLkuZ9jdw&usqp=CAU"
              alt=""
              className="rounded-full w-full h-full cursor-pointer"
            />
            <button  className=" bg-violet-700 w-6 h-6 rounded-full flex absolute left-[52%] top-[95%] justify-center items-center"><FaCamera/> </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly gap-5 flex-wrap">
      <div className="shadow  mt-4 mr-4 rounded-lg h-max w-[400px] bg-[#ffffff1a] p-2.5 ">
          <div className="flex justify-between">
            <span
              className="text-white font-sans text-[16px]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Photos
            </span>
            <span
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
              className="font-sans text-[16px] text-[#6c5dd3] whitespace-nowrap font-normal cursor-pointer"
              onClick={()=>setOpenPopup(true)}
            >
              See All Photos
            </span>
            {openPopup && <ProfilepicturePopUp handleClosePoP ={handleClosePoP}/>}
              
          </div>
          <div className="flex flex-wrap w-full h-full m-5 p-3 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu5tpCVXnuH0YxC-ljV2i3GublGLkuZ9jdw&usqp=CAU"
              className="flex w-[100px] h-[95px] m-1 rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>
        {/* Post Creation  */}
        <div className="flex justify-end pr-[0px]">
          <div className="bg-gray-500 bg-opacity-10 p-20    w-[300px] lg:w-[650px] text-white border border-gray-700  rounded-lg py-1">
            <div className="px-3 py-3 flex justify-center items-center border-b border-gray-700 relative">
              <h2 className="text-xl font-bold text-center">Create Post</h2>
            </div>

            <div className="px-3 py-3">
              <div className="flex space-x-3 justify-start items-center">
                <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
                  <a href="https://facebook.com/ShibbirAhmedRaihan">
                    <img className="w-full" src="" alt="MD. Shibbir Ahmed" />
                  </a>
                </div>

                <div className="flex flex-col space-y-0.5 items-start">
                  <h2 className="font-semibold text-sm"></h2>

                  <div className="bg-gray-700 rounded-md px-1 flex space-x-0.5 py-1 items-center cursor-pointer">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <span className="font-semibold text-xs">Public</span>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <textarea
                  id="content"
                  placeholder={`What's on your mind, ?`}
                  onChange={(e)=>{setContent(e.target.value)}}
                  className="w-full  bg-transparent resize-none text-2xl text-white outline-none placeholder-gray-400 focus:placeholder-gray-500"
                ></textarea>
                <img src="" className="w-[20rem] rounded-lg" alt="" />
              </div>

              <div className="flex justify-between items-center">
                <div className="w-8 h-8 border-2 border-white rounded-lg font-semibold flex justify-center items-center cursor-pointer">
                  Aa
                </div>
                <div className="text-gray-600 hover:text-gray-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=""
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="border border-gray-700 rounded-full mt-5 px-3 py-2.5 flex justify-between items-center">
                <div className="font-semibold cursor-pointer"></div>
                <div className="flex space-x-0.5">
                  <div className="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                    <input type="file" id="imageUrl" className="hidden" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button className="w-full bg-violet-500 mt-3 rounded-full py-4 text-white font-bold text-xl">
                Post
              </button>
            </div>
          </div>
        </div>
       
      </div>
      <div className=" flex justify-end lg:pr-[150px] mt-[90px]">
        <div className="shadow  mt-10 rounded-lg h-max ml-3 w-[800px] bg-[#ffffff1a] ">
          {/* POST AUTHOR */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex space-x-2 items-center">
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu5tpCVXnuH0YxC-ljV2i3GublGLkuZ9jdw&usqp=CAU"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </div>
              <div>
                <div
                  className="text-white font-sans font-[12px]"
                  style={{
                    fontFamily:
                      "'SF Pro Display Regular', Helvetica, sans-serif",
                  }}
                >
                  Aziz
                  <span className="text-sm text-gray-500 ml-1 font-bold">
                    10h
                  </span>
                </div>
                <span className="text-sm text-gray-500 font-bold">@Ena</span>
              </div>
            </div>
            <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer">
              <i className="bx bx-dots-horizontal-rounded"></i>
            </div>
          </div>
          {/* POST CONTENT */}
          <div className="text-justify px-4 py-2 ">
            <p
              className="text-white font-sans text-[16px]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              hello everybody
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKKCRYdlQpWv277oSb7NgSUNCj03REe-yUQ&usqp=CAU"
              className="mt-4 mb-4 rounded-md cursor-pointer w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
