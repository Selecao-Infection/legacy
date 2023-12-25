"use client";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import React, { useState, ChangeEvent, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ProfilepicturePopUp from "./profilepicturePopUp";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "react-query";
import Posts from "./Posts";
import EditPopUp from "./EditPopUp";
interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

type PostType = {
  content: string;
  imageUrl: string;
  userId: number;
};
const Page = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<UploadedFile | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [ProfilePic, setProfilePic] = useState<UploadedFile | null>(null);
  const [imageSetter, setImageSetter] = useState<string>("");
  const [pdp, setPdp] = useState<string>("");
  const [coverPic, setCoverPic] = useState<string>("");
  const [cover, setCover] = useState<UploadedFile | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [bio, setBio] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [openEditPopup, setOpenEditPopup] = useState<boolean>(false);
  const [openChanger, setOpenChanger] = useState<Boolean>(false);
  const [res,setRes]=useState<any>()
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("current") as string)) {
      setCurrentUser(
        jwtDecode(JSON.parse(window.localStorage.getItem("current") as string))
      );
    }
  }, []);

  useEffect(() => {
    handleId();
  }, [currentUser]);

  const handleId = () => {
    const decodedId = currentUser?.id;
    setId(decodedId);
  };
  console.log(openEditPopup, "show me the reason ");

  const Covergetter = () => {
    axios
      .get(`http://localhost:4000/api/user/profile/${id}`)
      .then((res) => {
        setCoverPic(res.data[0].coverUrl);
        setBio(res.data[0].bio);
        setUserName(res.data[0].userName);
        setEmail(res.data[0].email);
    
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(id,'dfghjk')
  const pdpGetter = () => {
    axios
      .get(`http://localhost:4000/api/user/profile/${id}`)
      .then((res) => {
        setPdp(res.data[0].pdp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (id) {
      pdpGetter();
      Covergetter();
    }
  }, [id]);

  const updatePFP = () => {
    const userId = currentUser?.id;
    if (!userId || !ProfilePic) {
      console.error("User ID or ProfilePic is missing.");
      return;
    }
    axios
      .put(`http://localhost:4000/api/user/update/${userId}`, {
        pdp: ProfilePic,
      })
      .then(() => {
        console.log("Profile picture updated!");
      })
      .catch((error) => {
        console.error("Error updating profile picture:", error);
      });
  };
  const updateCover = () => {
    const userId = currentUser?.id;
    if (!userId || !cover) {
      console.error("User ID or CoverPic is missing.");
      return;
    }
    axios
      .put(`http://localhost:4000/api/user/update/${userId}`, {
        coverUrl: cover,
      })
      .then(() => {
        console.log("Cover picture updated!");
      })
      .catch((error) => {
        console.error("Error updating cover picture:", error);
      });
  };
  // Fetcher function
  const getPosts = async () => {
    const res = await fetch("http://localhost:4000/api/get/post", {
      next: {
        revalidate: 120,
      },
    });
    return res.json();
  };
  // Using the hook
  const { data, isError, isLoading } = useQuery("randomFacts", getPosts);

  if (isLoading) {
    return <div>lOADING....</div>;
  }

  const handlePostClick = () => {
    const post = {
      content: content,
      imageUrl: imageUrl,
      userId: currentUser?.id,
    };

    axios
      .post("http://localhost:4000/api/post/post/create", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files[0];
    if (imageSetter === "post") {
      setImage(files);
    } else if (imageSetter === "pdp") {
      setProfilePic(files);
    } else if (imageSetter === "cover") {
      setCover(files);
    }
  };

  const uploadPostImage = (file: File) => {
    const storageRef = ref(storage, `Posts/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "download");

          setImageUrl(downloadURL);
        });
      }
    );
  };
  const uploadProfileImage = (file: File) => {
    const storageRef = ref(storage, `Profile/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "download");
          setProfilePic(downloadURL);
        });
      }
    );
  };
  const uploadCoverImage = (file: File) => {
    const storageRef = ref(storage, `Cover/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "download");
          setCover(downloadURL);
        });
      }
    );
  };
  const handleCloseEditPopUp = () => {
    setOpenEditPopup(!openEditPopup);
  };
  const handleClosePoP = () => setOpenPopup(!openPopup);
  return (
    <>
      {/* Banner */}
      <div className=" mb-[10px] relative">
        <div className="flex justify-center h-[450px]  ">
          <img src={coverPic} alt="" className=" " />
          <button
            className="rounded-full md:h-9 md:w-9 bg-violet-700 p-3 flex absolute top-[79%] left-[73%] transform -translate-y-1/2  "
            onClick={() => {
              setImageSetter("cover");
              setOpenChanger(!openChanger)
            }}
          >
            <MdEdit className="text-white" />
          </button>
        </div>

        {/* Avatar */}
        <div className="flex items-center justify-center  mb-[20px]">
          <div className="bg-white w-[120px] h-[120px] rounded-full p-1">
            <img
              src={pdp}
              alt=""
              className="rounded-full w-full h-full cursor-pointer"
            />
            <button
              onClick={() => {
                setOpenChanger(!openChanger);
                setImageSetter("pdp");
                
              }}
              className=" bg-violet-700 w-6 h-6 rounded-full flex absolute left-[52%] top-[95%] justify-center items-center"
            >
              <FaCamera />
            </button>
          </div>
        </div>
      </div>
      {/* userName */}
      <div className="flex justify-center text-center text-[14px] font-sans text-[#ffffffcc] mb-[50px]">
        <p>{userName}</p>
      </div>
      {/* bio */}
      <div className="flex justify-center text-center text-[14px] font-sans text-[#ffffffcc] mb-[50px] ">
        <p>{bio}</p>
      </div>
      {/* image Changer */}
      {openChanger && (
        <div className="flex flex-col items-end  justify-center mr-[50px] ">
          <div className="  w-[500px] ">
            <div className="flex items-center   w-full">
              <label
                forhtml="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/png"
                  className="hidden"
                  onChange={(e) => handleImageChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="mt-[10px] ">
            {imageSetter === "post" && (
              <button
                onClick={() => uploadPostImage(image)}
                className="mb-5 bg-indigo-500 rounded-[150px] p-3"
              >
                Upload
              </button>
            )}
              {imageSetter === "pdp" && (
                <button
                  onClick={() => uploadProfileImage(ProfilePic)}
                  className="mb-5 bg-indigo-500 rounded-[150px] p-3"
                >
                  Upload Profile Picture
                </button>
              )}
               {imageSetter === "pdp" && (
                <button
                  onClick={() => {updatePFP(), window.location.reload();}}
                  className="mb-5 ml-[15px] bg-indigo-500 rounded-[150px] p-3"
                >
                  Up-date Profile Picture
                </button>
              )}
              {imageSetter === "cover" && (
                <>
                  <button
                    onClick={() => uploadCoverImage(cover)}
                    className="mb-5 ml-[15px] bg-indigo-500 rounded-[150px] p-3"
                  >
                    Upload Cover Picture
                  </button>
                  <button
                    onClick={() =>{ updateCover() , window.location.reload()}}
                    className="mb-5 ml-[15px] bg-indigo-500 rounded-[150px] p-3"
                  >
                    Up-date Cover Picture
                  </button>
                </>
              )}
          </div>
        </div>
      )}

      {/* update PopUp */}
      <div className="grid justify-items-end mr-[75px] mb-[20px]">
      <button
        onClick={() => setOpenEditPopup(true)}
        className='  flex flex-wrap [font-family : "SF_Pro_Display-Semibold" , Helvetica] font-normal rounded-[70px] py-4 bg-indigo-500  text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap'
      >
        Edit Profile
      </button>
      </div>
      <EditPopUp
        isOpen={openEditPopup}
        closeEditPopUp={handleCloseEditPopUp}
        currentUser={currentUser}
        email={email}
      />
      <div className=" flex justify-evenly gap-5 flex-wrap">
        <div className="shadow  mt-4 mr-4 rounded-lg h-max w-[400px] bg-[#ffffff1a] p-2.5 ">
          <div className="flex justify-between">
            <span
              className="text-white font-sans text-[16px]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Photos ❤️
            </span>
            <span
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
              className="font-sans text-[16px] text-[#6c5dd3] whitespace-nowrap font-normal cursor-pointer"
              onClick={() => setOpenPopup(true)}
            >
              See All Photos
            </span>
            {openPopup && (
              <ProfilepicturePopUp handleClosePoP={handleClosePoP} />
            )}
          </div>
          <div className="flex flex-wrap w-full h-full m-5 p-3 ">
            {data?.map(
              (post: {
                id: React.Key | null | undefined;
                imageUrl: string | undefined;
              }) => {
                return (
                  <img
                    key={post.id}
                    src={post.imageUrl}
                    className="flex w-[100px] h-[95px] m-1 rounded-md p-1 cursor-pointer"
                    alt=""
                  />
                );
              }
            )}
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
                  <img
                    className="w-full"
                    src={currentUser.pdp}
                    alt="MD. Shibbir Ahmed"
                  />
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
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
                  placeholder={`What's on your mind,${userName} ?`}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth=""
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-[15px] mr-[10px]">
                <div className="font-semibold cursor-pointer"></div>
                <div className="flex space-x-0.5">
                  <div className="bg-transparent hover:bg-gray-700 p-1 rounded-full transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="imageUrl"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-[55px] text-green-500 mr-[30px]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => {
                        setImageSetter("post");
                        setOpenChanger(!openChanger);
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-violet-500 mt-3 rounded-full py-4 text-white font-bold text-xl"
                onClick={() => handlePostClick()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-end lg:pr-[150px] mt-[90px]">
        <div className="shadow  mt-10 rounded-lg h-max ml-3 w-[800px] bg-[#ffffff1a] ">
          

          {/* POST CONTENT */}
          {data.length>0 && 
          data?.reverse().map(
            (post: {
              id: React.Key | null | undefined;
              content:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
              imageUrl: string | undefined;
            }) => (
              <Posts
                key={post.id}
                // content={post.content}
                // imageUrl={post.imageUrl}
                post={post}
                currentUser={currentUser}
                pdp={pdp}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
