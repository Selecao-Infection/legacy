"use client"

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
interface Product {
  id: number;
  productName: string;
  imageUrl: string;
  price: number;
  category: string;
  like: boolean;
}

const NewTrending = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {

    const apiUrl = "http://localhost:4000/api/get/product/new";
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLike = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, like: !product.like };
      }
      return product;
    });

  
    setSelectedProduct(updatedProducts.find((product) => product.id === id) || null);
    setProducts(updatedProducts);
    setShowAlert(true);


    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
console.log(products)
    console.log(`Buy Now clicked for product ID: ${id}`);
  };

  return (
    <div>

    {showAlert && (
        <div className="bg-green-500 text-white p-2 fixed bottom-0 rigth-2  m-4 rounded-md">
          {
          selectedProduct?.like
            ? `Added ${selectedProduct.productName} to favorites!`
            : `Removed ${selectedProduct?.productName} from favorites!`}
        </div>
      )}{" "}
      <div className="flex flex-wrap justify-center gap-8 ">
        { products.length > 0 && products.map((product) => (
          <div className="w-80 h-80 ">
            <div
              key={product.id}
              className="mt-12 p-4 hover:scale-105 transition-transform bg-opacity-10 bg-white rounded-lg shadow w-80 h-80"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-[350px] h-40 object-cover mb-4"
              />
              <div className="text-white">
                <h2 className="text-xl font-bold mb-2">
                  {product.productName}
                </h2>
                <div className="w-full flex flex-row justify-between">
                  <div className="text-white flex items-stretch">
                    ${product.price}
                  </div>
                  <h3 className="flex items-stretch">{product.category}</h3>
                </div>
                <div className="flex items-center mt-2">
                  <div className=" container mr-2 flex justify-between items-center">
                    <svg
                        id="Layer_1"
                        version="1.0"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className={`w-6 h-6 transition-transform text-gray animate-pulse  hover:scale-110 ${
                          product.like ? "text-red" : ""
                        }`}
                        onClick={() => handleLike(product.id)}
                      >
                        <path
                          fill={product.like ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"
                        />
                      </svg>
                    <div className="text-white bg-violet-600 rounded-full w-[190px] p-2">
                      Buy Now
                    </div>
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

export default NewTrending;
