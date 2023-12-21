import React from "react";

const basket = () => {
  return (
    <div className="h-screen  pt-20">
      <h1 className="mb-10 text-center text-white text-3xl font-bold">
        Basket Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="mt-6 h-full rounded-lg border bg-white bg-opacity-10 p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-300">Subtotal</p>
            <p className="text-gray-300">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">Shipping</p>
            <p className="text-gray-300">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-white">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold text-white">$</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-violet-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default basket;
