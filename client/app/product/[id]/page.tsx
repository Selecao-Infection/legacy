"use client"
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

interface Product {
  id: number;
  productName: string;
  price: number;
  likes: number;
  category: string;
  imageUrl: string[];
  description: string;
  rating: number;
  new: boolean;
  like: boolean;
  brandId: string;
}

interface ActiveSlides {
  [id: number]: number;
}

const fetchProduct = async (id: string) => {
  const response = await axios.get<Product>(
    `http://localhost:4000/api/get/product/${id}`
  );
  return response.data;
};

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { data: product, isLoading, isError } = useQuery<Product>(
    ["product", params.id],
    () => fetchProduct(params.id)
  );

  const activeSlides: ActiveSlides = {};

  const getActiveSlide = (id: number) => activeSlides[id] || 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
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
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return <div>Error fetching product details</div>;
  }

  return (
    <div className="container mx-auto my-8 p-8 bg-black rounded-lg shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src={product.imageUrl[getActiveSlide(product.id)]}
          className="w-[550px] h-[30rem] object-cover rounded-lg"
          alt={`${product.productName}-${getActiveSlide(product.id)}`}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4"> {product.productName}</h2>
        <p className="mb-4 text-gray-400 white-space:nowrap word-wrap: break-word">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-500 font-bold">
            ${product.price.toFixed(3)}
          </p>
          <div className="flex items-center space-x-2">
            <p className="text-gray-500">Rating: {product.rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500">
            Category: <span className="font-bold">{product.category}</span>
          </p>
          <p className="text-gray-500">
            Likes: <span className="font-bold">{product.likes}</span>
          </p>
          <p className="text-gray-500">
            {product.new ? "New Product" : "Not a New Product"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
