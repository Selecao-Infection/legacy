import React, { useState } from "react";
import { MdVerified } from "react-icons/md";

const CreatorCard = () => {
  const [isFollowedKanye, setIsFollowedKanye] = useState(false);
  const [isFollowedMadison, setIsFollowedMadison] = useState(false);
  const [isFollowedJohn, setIsFollowedJohn] = useState(false);

  const handleFollowToggleKanye = () => {
    setIsFollowedKanye((prevFollowState) => !prevFollowState);
  };

  const handleFollowToggleMadison = () => {
    setIsFollowedMadison((prevFollowState) => !prevFollowState);
  };

  const handleFollowToggleJohn = () => {
    setIsFollowedJohn((prevFollowState) => !prevFollowState);
  };

  return (
    <div className="mt-10">
      <div className="flex space-x-2 w-full rounded-lg overflow-hidden mx-auto justify-between px-20">
        {/* Kanye West */}
        <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div className="w-full card__media">
            <img
              src="https://images2.alphacoders.com/109/thumb-1920-1099401.jpg"
              className="h-48 w-full rounded-lg"
            />
          </div>
          <div className="card__media--aside"></div>
          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  className="h-24 w-24 md rounded-full relative"
                  src="https://www.arabianbusiness.com/cloud/2022/09/26/Kanye-West.jpg"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  Kanye West <MdVerified className="text-blue-500" />
                </span>
                <p className="text-sm text-gray-400">
                  Style is a way to say who you are without having to speak
                </p>
                <div className=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button
                    className={`bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ${
                      isFollowedKanye ? "bg-red-500" : ""
                    }`}
                    onClick={handleFollowToggleKanye}
                  >
                    <span className="mr-2"></span>{" "}
                    {isFollowedKanye ? (
                      <span>- UNFOLLOW</span>
                    ) : (
                      <span>+ FOLLOW</span>
                    )}
                    <span className="ml-2"></span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Madison Beer */}
        <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div className="w-full card__media">
            <img
              src="https://wallpapercave.com/wp/wp5746868.jpg"
              className="h-48 w-96 rounded-lg"
            />
          </div>
          <div className="card__media--aside"></div>
          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  className="h-24 w-24 md rounded-full relative"
                  src="https://www.hawtcelebs.com/wp-content/uploads/2019/03/madison-beer-at-iheartradio-music-awards-2019-in-los-angeles-03-14-2019-5.jpg"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  Madison Beer <MdVerified className="text-blue-500" />
                </span>
                <p className="text-sm text-gray-400">
                  Elegance in every stitch, style in every step
                </p>
                <div className="w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button
                    className={`bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ${
                      isFollowedMadison ? "bg-red-500" : ""
                    }`}
                    onClick={handleFollowToggleMadison}
                  >
                    <span className="mr-2"></span>{" "}
                    {isFollowedMadison ? (
                      <span>- UNFOLLOW</span>
                    ) : (
                      <span>+ FOLLOW</span>
                    )}
                    <span className="ml-2"></span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* John Wick */}
        <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div className="w-full card__media">
            <img
              src="https://images.hdqwalls.com/wallpapers/john-wick-art-l3.jpg"
              className="h-48 w-full rounded-lg"
            />
          </div>
          <div className="card__media--aside"></div>
          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img
                  className="h-24 w-24 md rounded-full relative"
                  src="https://i1.wp.com/www.bulletproofaction.com/wp-content/uploads/2015/09/john-wick.jpg"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                  John Wick <MdVerified className="text-blue-500" />
                </span>
                <p className="text-sm text-gray-400">
                  Fashion is the armor to survive the reality of everyday life
                </p>
                <div className="w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                  <button
                    className={`bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ${
                      isFollowedJohn ? "bg-red-500" : ""
                    }`}
                    onClick={handleFollowToggleJohn}
                  >
                    <span className="mr-2"></span>{" "}
                    {isFollowedJohn ? (
                      <span>- UNFOLLOW</span>
                    ) : (
                      <span>+ FOLLOW</span>
                    )}
                    <span className="ml-2"></span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
