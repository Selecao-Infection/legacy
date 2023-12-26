"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
interface favorite {
  userId: string;
  productId: string;
}

interface Product {
  id: string;
  productName: string;
  price: number;
  likes: number;
  category: string;
  imageUrl: string[];
  gender: string;
  description: string;
  rating: number;
  new: boolean;
  brandId: string;
}

const Favorite = () => {
  const [favorites, setFavorites] = useState<any>({});
  const [current, setCurrent] = useState<any>(
    jwtDecode(JSON.parse(window.localStorage.getItem("current") as string))
  );
  const [products, setProducts] = useState<Boolean>(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        console.log(current);

        const response = await axios.post(
          "http://localhost:4000/api/get/favorite",
          { userId: current.id }
        );
        console.log(response.data[0].Product);

        setFavorites(response.data[0].Product);
        setProducts(true);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white h-screen">
      <h2 className="text-red-500 text-center text-6xl">Your Favorites</h2>
      <div className="mt-12 p-4 hover:scale-105 text-center border transition-transform bg-opacity-10 bg-white rounded-lg shadow w-80 h-[390px]">
        {products ? (
          <>
            <h1>{favorites.productName}</h1>
            <img
              src={favorites.imageUrl}
              className="w-full h-40 object-cover mb-4"
              alt={favorites.productName}
            />
            <div className="text-white">
              <h2 className="text-xl font-bold mb-2">
                {favorites.productName}
                <h3 className="flex items-stretch">{favorites.category}</h3>
              </h2>
              <div className="w-full flex flex-row justify-between">
                <div className="text-white flex items-stretch">
                  price: ${favorites.price}
                </div>
                <div className="flex">
                  <button className="text-white underline rounded-full w-[90px] p-2">
                    Details
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="container mr-2 flex justify-between items-center">
                  <svg
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className={`w-6 h-6 transition-transform text-red animate-pulse hover:scale-110`}
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"
                    />
                  </svg>
                  <button className="text-white bg-violet-600 rounded-full w-[190px] p-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
