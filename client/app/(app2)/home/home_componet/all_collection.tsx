import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

const AllCollection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [activeSlides, setActiveSlides] = useState<ActiveSlides>({});
  const router = useRouter(); 

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

  const handleLike = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, like: !product.like };
      }
      return product;
    });

    const selectedProduct = updatedProducts.find(
      (product) => product.id === id
    );
    setSelectedProduct(selectedProduct || null);
    setProducts(updatedProducts);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    console.log(`Buy Now clicked for product ID: ${id}`);
  };

  const handleNextSlide = () => {
    if (selectedProduct) {
      setActiveSlides((prev) => ({
        ...prev,
        [selectedProduct.id]: Math.min(
          (prev[selectedProduct.id] || 0) + 1,
          selectedProduct.imageUrl.length - 1
        ),
      }));
    }
  };

  const handlePrevSlide = () => {
    if (selectedProduct) {
      setActiveSlides((prev) => ({
        ...prev,
        [selectedProduct.id]: Math.max((prev[selectedProduct.id] || 0) - 1, 0),
      }));
    }
  };
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const getActiveSlide = (id: number) => {
    return activeSlides[id] || 0;
  };

  return (
    <div>
      
      {showAlert && (
        <div className="bg-green-500 text-white p-2 fixed bottom-0 right-2 m-4 rounded-md">
          {selectedProduct?.like
            ? `Removed ${selectedProduct.productName} to favorites!`
            : `Added ${selectedProduct?.productName} from favorites!`}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-8 ">
        { products.length > 0 && products.map((product) => (
          <div key={product.id} className="w-80 h-80 relative">
            <div>
              <div
                className="mt-12 p-4 hover:scale-105 transition-transform bg-opacity-10 bg-white rounded-lg shadow w-80 h-[350px]"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.imageUrl[getActiveSlide(product.id)]}
                  className="w-full h-40 object-cover mb-4"
                  alt={`${product.productName}-${getActiveSlide(product.id)}`}
                />
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-2">
                    {product.productName}
                    <h3 className="flex items-stretch">{product.category}</h3>
                  </h2>
                  <div className="w-full flex flex-row justify-between">
                    <div className="text-white flex items-stretch">
                      price: ${product.price}
                    </div>
                    <div className="flex">
                      <button
                        className="text-white underline rounded-full w-[90px] p-2"
                        onClick={() => router.push(`/product/${product.id}`)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="container mr-2 flex justify-between items-center">
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
                        onClick={() => handleLike(product.id)}
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
            {selectedProduct && (
              <div
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </div>
            )}
            {selectedProduct && (
              <div
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

  );
};

export default AllCollection;
