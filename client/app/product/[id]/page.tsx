"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

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

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeSlides, setActiveSlides] = useState<ActiveSlides>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product>(
          `http://localhost:4000/api/get/product/${params.id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const getActiveSlide = (id: number) => {
    return activeSlides[id] || 0
  };

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
        <p className="mb-4 text-gray-400 white-space:nowrap word-wrap: break-word">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg text-green-500 font-bold">
            ${product.price.toFixed(2)}
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
