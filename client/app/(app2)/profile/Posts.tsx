import axios from "axios";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
interface PostProps {
  content: string;
  imageUrl: string;
  currentUser: object;
  post: object;
  pdp: any;
}

const Posts: React.FC<PostProps> = ({ post, currentUser, pdp }) => {
  const [postId, setPostId] = useState<string>("");
  
  const [openEdit, setOpenEdit] = useState<boolean>(false);
 


 
  return (
    <>
      <div
        className="shadow mt-10 rounded-lg h-max ml-3 w-[full] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#ffffff1a]"
      
      >
     
        {/* POST AUTHOR */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* {/ Existing code remains the same here  */}
        </div>
        {/* {/ END POST AUTHOR /} */}
        {/* {/ POST CONTENT /} */}
        <div className="text-justify px-4 py-2">
          <p
            className="text-white font-sans text-sm md:text-base"
            style={{
              fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
            }}
          >
            {post.content}
          </p>
          <img
            src={post.imageUrl}
            className="mt-4 mb-4 rounded-md cursor-pointer w-full"
            alt=""
          />
        </div>
      </div>
      
    </>
  );
};
export default Posts;
