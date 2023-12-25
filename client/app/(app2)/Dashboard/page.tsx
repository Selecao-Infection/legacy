import React from "react";
import { MdVerified } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full py-10 mt-[10%] flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold">Top Market Statistics</h1>
        <h2 className="text-gray-500">
          Ultimate Destination for Trendy and Comfortable Footwear
        </h2>
      </div>
      <div className="flex w-full p-10 justify-between">
        <button className="bg-violet-500 p-2 text-white rounded-lg">
          Marketplace Preformance
        </button>
        <div className="flex gap-8 ">
          <select className="border bg-transparent text-gray-500 rounded-lg px-4">
            <option value="1">Last 7 days</option>
          </select>
          <select className="border bg-transparent text-gray-500 rounded-lg px-4">
            <option value="1">All Categories</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium border-white text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Collection
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Volume
                    </th>
                    <th scope="col" className="px-6 py-4">
                      24H%
                    </th>
                    <th scope="col" className="px-6 py-4">
                      7D%
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Floor Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Owners
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Items
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-mediu">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white text-2xl font-bold">1</h1>
                        <img
                          className="h-8 w-8 md rounded-full object-cover relative"
                          src="https://icdn.thecelticstar.com/wp-content/uploads/2020/03/1-16848_adidas-white-logo-png-free-stock-adidas.png.jpeg"
                          alt=""
                        />
                        <h1 className="text-white text-xl font-bold">Adidas</h1>
                        <MdVerified className="text-blue-500" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap flex items-center px-6 py-4 text-white font-semibold">
                      <FaEthereum />
                      27,966.76
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-green-600 font-semibold">
                      +92.96
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-600 font-semibold">
                      -16.38
                    </td>
                    <td className="whitespace-nowrap px-6 flex items-center py-4 text-white font-semibold">
                      <FaEthereum />
                      12.99
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      5.9K
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      10K
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-mediu">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white text-2xl font-bold">2</h1>
                        <img
                          className="h-8 w-8 md rounded-full object-fit relative"
                          src="http://hdwpro.com/wp-content/uploads/2019/11/Free-Nike-Logo-380x250.jpg"
                          alt=""
                        />
                        <h1 className="text-white text-xl font-bold">Nike</h1>
                        <MdVerified className="text-blue-500" />
                      </div>
                    </td>
                   
                    <td className="whitespace-nowrap flex items-center px-6 py-4 text-white font-semibold">
                      <FaEthereum />
                      27,966.76
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-green-600 font-semibold">
                      +92.96
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-600 font-semibold">
                      -16.38
                    </td>
                    <td className="whitespace-nowrap px-6 flex items-center py-4 text-white font-semibold">
                      <FaEthereum />
                      12.99
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      5.9K
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      10K
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-mediu">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white text-2xl font-bold">3</h1>
                        <img
                          className="h-8 w-8 md rounded-full object-fit relative"
                          src="http://tous-logos.com/wp-content/uploads/2017/09/logo-Lacoste.jpg"
                          alt=""
                        />
                        <h1 className="text-white text-xl font-bold">
                          Lacoste
                        </h1>
                        <MdVerified className="text-blue-500" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap flex items-center px-6 py-4 text-white font-semibold">
                      <FaEthereum />
                      27,966.76
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-green-600 font-semibold">
                      +92.96
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-600 font-semibold">
                      -16.38
                    </td>
                    <td className="whitespace-nowrap px-6 flex items-center py-4 text-white font-semibold">
                      <FaEthereum />
                      12.99
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      5.9K
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      10K
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-mediu">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white text-2xl font-bold">4</h1>
                        <img
                          className="h-8 w-8 md rounded-full object-fit relative"
                          src="https://qph.cf2.quoracdn.net/main-qimg-46e4cf54e93ad179ff19843dde22f4d6-lq"
                          alt=""
                        />
                        <h1 className="text-white text-xl font-bold">Puma</h1>
                        <MdVerified className="text-blue-500" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap flex items-center px-6 py-4 text-white font-semibold">
                      <FaEthereum />
                      27,966.76
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-green-600 font-semibold">
                      +92.96
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-600 font-semibold">
                      -16.38
                    </td>
                    <td className="whitespace-nowrap px-6 flex items-center py-4 text-white font-semibold">
                      <FaEthereum />
                      12.99
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      5.9K
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      10K
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-mediu">
                      <div className="flex items-center gap-2">
                        <h1 className="text-white text-2xl font-bold">5</h1>
                        <img
                          className="h-8 w-8 md rounded-full object-fit relative"
                          src="https://i.pinimg.com/736x/fd/8c/d2/fd8cd276b86211220ddc65c0bd2ce69c.jpg"
                          alt=""
                        />
                        <h1 className="text-white text-xl font-bold">Zara</h1>
                        <MdVerified className="text-blue-500" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap flex items-center px-6 py-4 text-white font-semibold">
                      <FaEthereum />
                      27,966.76
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-green-600 font-semibold">
                      +92.96
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-red-600 font-semibold">
                      -16.38
                    </td>
                    <td className="whitespace-nowrap px-6 flex items-center py-4 text-white font-semibold">
                      <FaEthereum />
                      12.99
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      5.9K
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white font-semibold">
                      10K
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
