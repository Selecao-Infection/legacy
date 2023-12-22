import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import axios from "axios";

interface Brand {
  id: string;
  brandName: string;
  email: string;
  password: string;
  imageUrl: string;
}

const BrandsCard = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

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
      <div className="flex space-x-2 w-full rounded-lg overflow-hidden mx-auto justify-between px-40 gap-[150px]">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex-1 card min-w-sm rounded-xl bg-white bg-opacity-10 transition-shadow shadow-xl hover:shadow-xl min-w-max"
          >
            <div className="w-full card__media">
              <img
                src={brand.imageUrl}
                className="h-48 w-full rounded-lg"
                alt=""
              />
            </div>
            <div className="card__media--aside"></div>
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full object-cover relative"
                    src={brand.imageUrl}
                    alt=""
                  />
                  <div className="absolute"></div>
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span className="text-md whitespace-nowrap text-white font-bold flex items-center gap-2">
                    {brand.brandName}{" "}
                    <MdVerified className="text-blue-500" />
                  </span>
                  <div className="text-sm text-gray-400">
                  </div>
                  <div className="w-full py-2 flex space-x-2 items-center justify-center px-10">
                    <button className="bg-violet-500 text-white font-semibold w-full p-2 rounded-xl">
                      <span className="mr-2"></span>+ FOLLOW
                      <span className="ml-2"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
