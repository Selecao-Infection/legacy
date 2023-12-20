import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import axios from "axios";

interface Brand {
    id        :string,      
    brandName :string,
    email     :string,      
    password  :string,
    imageUrl  :string,
   
  }

const BrandsCard = () => {
    const [brands,setBrands] = useState<Brand[]>([]) 
    useEffect(() => {
        const apiUrl = "http://localhost:4000/brand/";
        axios
          .get<Brand[]>(apiUrl)
          .then((response) => {
            setBrands(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);


  return (
    <div className="mt-10">
    <div className=" flex space-x-2 w-full rounded-lg overflow-hidden mx-auto justify-between px-20">
      <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
        <div className="w-full card__media">
          <img
            src="http://sguru.org/wp-content/uploads/2018/02/adidas_logo_Wallpaper_1366x768.jpg"
            className="h-48 w-full rounded-lg"
          />
        </div>
        <div className="  card__media--aside "></div>
        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img
                className="h-24 w-24 md rounded-full object-cover relative"
                src="https://icdn.thecelticstar.com/wp-content/uploads/2020/03/1-16848_adidas-white-logo-png-free-stock-adidas.png.jpeg"
                alt=""
              />
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                Adidas <MdVerified className="text-blue-500" />
              </span>
              <p className="text-sm text-gray-400">
                Sport meets style with Adidas-where performance inspires
                fashion
              </p>
              <div className=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                <button className="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                  <span className="mr-2"></span>+ FOLLOW<span className="ml-2"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
        <div className="w-full card__media">
          <img
            src="http://www.pixelstalk.net/wp-content/uploads/2015/12/Cool-Nike-logo-wallpaper.jpg"
            className="h-48 w-full rounded-lg"
          />
        </div>
        <div className="  card__media--aside "></div>
        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img
                className="h-24 w-24 md rounded-full object-fill relative"
                src="http://hdwpro.com/wp-content/uploads/2019/11/Free-Nike-Logo-380x250.jpg"
                alt=""
              />
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                Nike <MdVerified className="text-blue-500" />
              </span>
              <p className="text-sm text-gray-400">
                Just Do It. Be bold, be inspired, and be your own athlete.
              </p>
              <div className=" w-full py-2  space-x-2 flex items-center justify-center px-10">
                <button className="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                  <span className="mr-2"></span>{" "}
                  <a href="https://www.instagram.com/nike/" target="_blank">
                    + FOLLOW
                  </a>
                  <span className="ml-2"></span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card  min-w-sm rounded-xl bg-white bg-opacity-10   transition-shadow shadow-xl hover:shadow-xl min-w-max">
        <div className="w-full card__media">
          <img
            src="https://i.ytimg.com/vi/bdW4P_whnZU/maxresdefault.jpg"
            className="h-48 w-96 rounded-lg"
          />
        </div>
        <div className="  card__media--aside "></div>
        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img
                className="h-24 w-24 md rounded-full object-fill relative"
                src="http://tous-logos.com/wp-content/uploads/2017/09/logo-Lacoste.jpg"
                alt=""
              />
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                Lacoste <MdVerified className="text-blue-500" />
              </span>
              <p className="text-sm text-gray-400">
                Timeless elegance, sporty sophistication
              </p>
              <div className=" w-full py-2 flex space-x-2 flex items-center justify-center px-10">
                <button className="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl ">
                  <span className="mr-2"></span>{" "}
                  <a
                    href="https://www.instagram.com/lacoste/"
                    target="_blank"
                  >
                    + FOLLOW
                  </a>
                  <span className="ml-2"></span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BrandsCard