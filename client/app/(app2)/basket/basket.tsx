import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import List from "./basketList";

const Basket = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(true);
  const [current, setCurrent] = useState<any>();

  useEffect(() => {
    if (window.localStorage.getItem("current")) {
      setCurrent(jwtDecode(window.localStorage.getItem("current") as string));
    }
  }, []);

  const handleCheckOut = () => {
    
    
  };

  const handleClose = () => {
    // Set open to false only when the close button is clicked
    setOpen(false);
  };

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-700 sm:duration-1000"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-700 sm:duration-1000"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-black shadow-xl text-white">
                      <div className="flex flex-col items-start m-4 realtive top-10 gap-10 ">
                        <div className="flex flex-wrap gap-10 lg:gap-24 b">
                          <button
                            onClick={handleClose}
                            type="button"
                            className="w-[20px] h-[20px] text-gray-900 hover:text-white border border-gray-800 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-violet-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-violet-600 dark:focus:ring-violet-800"
                          >
                            <h1 className="relative bottom-2 right-1.5"> X</h1>
                          </button>
                          <h1 className="font-sans text-2xl relative top-[10px]">
                            Order Details
                          </h1>
                        </div>

                        <div className="flex-col flex gap-4">
                          <div className="font-sans text-xl">My Cart</div>
                          <div className="flex flex-col gap-5">
                            <List current={current} />

                            <div className="w-full h-[0px] border border-white border-opacity-50"></div>
                          </div>
                        </div>
                        <div className="relative left-16">
                          <button
                            onClick={handleCheckOut}
                            className="float-right w-[175px] h-[47px] px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-[121px] justify-center items-center gap-2.5 inline-flex"
                          >
                            <div className="text-white text-[17px] font-medium font-['Poppins']">
                              CheckOut
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Basket;
