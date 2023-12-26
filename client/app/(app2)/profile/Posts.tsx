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
  const [updatedContent, setUpdatedContent] = useState<string>("");
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const idSetter = () => {
    setPostId(post.id);
  };

  console.log(postId, "post id");
  console.log(updatedContent, "update");

  const postUpdatehandler = (id) => {
    if (!postId) {
      console.error("postId is missing.");
      return;
    }
    axios
      .put(`http://localhost:4000/api/put/post/update/${id}`, {
        content: updatedContent,
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };
  return (
    <>
      <div
        className="shadow  mt-10 rounded-lg h-max ml-3 w-[800px] bg-[#ffffff1a] "
        onClick={() => {
          idSetter();
        }}
      >
        {/* POST AUTHOR */}

        <button
          className="rounded-[30px] md:h-9 md:w-9 bg-zinc-500 p-3 absolute right-[150px]  "
          onClick={() => {
            setOpenEdit(true);
          }}
        >
          <MdEdit className="text-white" />
        </button>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex space-x-2 items-center">
            <div className="relative">
              <img
                src={pdp}
                alt="Profile picture"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
            <div>
              <div
                className="text-white font-sans font-[12px]"
                style={{
                  fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
                }}
              >
                {currentUser.userName}
                <span className="text-sm text-gray-500 ml-1 font-bold">
                  10h
                </span>
              </div>
              <span className="text-sm text-gray-500 font-bold">
                @{currentUser.userName}
              </span>
            </div>
          </div>
          <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer">
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
        {/* END POST AUTHOR */}
        {/* POST CONTENT */}
        <div className="text-justify px-4 py-2 ">
          <p
            className="text-white font-sans text-[16px]"
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
      {openEdit && (
        <div
          id="PostContainer"
          className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm "
        >
          <div className="p-2 bg-[#494649] w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
            <div className="w-full p-3 justify-center items-center">
              <h2 className="font-semibold py-3 text-center text-xl text-[#ebebeb]">
                your Post Update goes here
              </h2>
              <div className="px-4 mt-5 shadow w-auto self-center rounded-lg dark:bg-dark-second">
                <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
                  <textarea
                    className="flex-1 bg-[#ffffff1a] rounded-full flex items-center justify-start pl-4 dark:bg-dark-third text-gray-100 text-lg dark:text-dark-txt"
                    placeholder="Uppdate your Post here..."
                    onChange={(e) => setUpdatedContent(e.target.value)}
                  />
                </div>
                <div className="p-2 flex justify-center">
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-point">
                    <span
                      className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt"
                      onClick={() => {
                        postUpdatehandler(postId);
                        window.location.reload();
                      }}
                    >
                      Confirm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Posts;
