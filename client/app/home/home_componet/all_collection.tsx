import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  productName: string;
  imageUrl: string;
  price: number;
  new: boolean;
  category: string;
  like: boolean;
}

const AllCollection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/api/get/product";
    axios
      .get<Product[]>(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleBuyNow = async (id: number) => {
    try {
      await axios
        .put(`http://localhost:4000/api/put/product/update/${id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.error(err, "Error updating the like");
        });

      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, like: !product.like };
        }
        return product;
      });

      setSelectedProduct(null);
      setProducts(updatedProducts);
      setShowAlert(true);

      console.log(`Buy Now clicked for product ID: ${id}`);
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <>
      {showAlert && (
        <div className="bg-green-500 text-white p-2 fixed bottom-0 rigth-2  m-4 rounded-md">
          {selectedProduct?.like
            ? `Added ${selectedProduct.productName} to favorites!`
            : `Removed ${selectedProduct?.productName} from favorites!`}
        </div>
      )}{" "}
      <div className=" flex justify-around mt-[10rem]">
        <button className="bg-violet-700 text-white font-semibold p-2 rounded-lg  px-8">
          All Collections
        </button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">
          Verified Brands
        </button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">
          Verified Artists
        </button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">
          New Drops
        </button>
        <button className="bg-white bg-opacity-10 text-white font-semibold p-2 rounded-lg px-8">
          Live Shows
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8 ">
        {products.map((product) => (
          <div className="w-80 h-80 ">
            <div
              key={product.id}
              className="mt-12 p-4 hover:scale-105 transition-transform bg-opacity-10 bg-white rounded-lg shadow w-80 h-80"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-50 h-40 object-cover mb-4"
              />
              <div className="text-white">
                <h2 className="text-xl font-bold mb-2">
                  {product.productName}
                </h2>
                <div className="w-full flex flex-row justify-between">
                  <p className="text-white flex items-stretch">
                    ${product.price}
                  </p>
                  <h3 className="flex items-stretch">{product.category}</h3>
                </div>
                <div className="flex items-center mt-2">
                  <div className=" container mr-2 flex justify-between items-center">
                    <input type="checkbox" className="hidden" />
                    <svg
                      id="Layer_1"
                      version="1.0"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className={`w-6 h-6 transition-transform fill-current text-gray-600 hover:scale-110 ${
                        product.like ? "text-red-500" : ""
                      }`}
                      onClick={() => handleBuyNow(product.id)}
                    >
                      <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
                    </svg>
                    <button className="text-white bg-violet-600 rounded-full w-[190px] p-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCollection;
